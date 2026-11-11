const tools = [
  { id: "filtrer_references_chambres", title: "Contrôler la REFERENCE des chambres", category: "Chambres", description: "Exporte les chambres dont la référence ne respecte pas la forme XXX_CODE_CH1_CODE_INSEE. La couche source reste en lecture seule.", safety: "read_only" },
  { id: "detection_doublons_chambres", title: "Détecter les doublons de chambres", category: "Chambres", description: "Recherche les chambres qui partagent exactement la même REFERENCE et exporte chaque paire dans un CSV. La couche source reste en lecture seule.", safety: "read_only" },
  { id: "appliquer_corrections_chambres", title: "Créer une couche Chambre corrigée", category: "Chambres", description: "Crée une nouvelle couche GeoPackage et applique les corrections NUMERO, LIBELLE et CODE_POSTAL. L’original n’est jamais modifié.", safety: "creates_copy" },
  { id: "controle_reference_poteaux", title: "Auditer la REFERENCE des poteaux", category: "Poteaux", description: "Exporte les poteaux dont la REFERENCE ne respecte pas la règle métier attendue. Un numéro absent est remplacé par XXXXXX.", safety: "read_only" },
  { id: "controle_reference_portees", title: "Auditer la REFERENCE des portées", category: "Portée", description: "Exporte les portées dont la REFERENCE n’est pas égale à PRT suivi de l’OBJECTID. La couche source reste en lecture seule.", safety: "read_only" },
  { id: "controle_reference_tranchee", title: "Contrôler la REFERENCE des tranchées", category: "Tranchées", description: "Retrouve les équipements aux extrémités et prépare la référence attendue. Le mode simulation est activé par défaut.", safety: "optional_source_modification" },
  { id: "detection_doublons_tranchee", title: "Détecter les doublons de tranchées", category: "Tranchées", description: "Regroupe les liaisons identiques dans les deux sens et calcule leur similarité géométrique. Lecture seule des couches.", safety: "read_only" },
  { id: "controle_adresses_chambres", title: "Contrôler les adresses avec la BAN", category: "Adresses / BAN", description: "Compare les adresses des chambres au géocodage inverse officiel et génère uniquement des CSV de propositions.", safety: "read_only_network" },
  { id: "consolider_recontrole_adresses", title: "Consolider le recontrôle des adresses", category: "Adresses / BAN", description: "Fusionne les résultats du second contrôle et de la reprise des erreurs API dans un dossier final.", safety: "output_only" },
  { id: "correction_code_plaque", title: "Calculer les corrections ID_PLAQUE", category: "ID_PLAQUE", description: "Calcule les plaques des chambres et poteaux depuis les câbles, puis celles des tranchées depuis leurs extrémités.", safety: "read_only" },
  { id: "controle_chamberusa", title: "Contrôler l’USAGE des chambres", category: "Chambres", description: "Déduit CHAMBERUSA depuis la topologie chambres–boîtes–câbles et exporte les propositions par règle.", safety: "read_only" },
  { id: "detect_self_intersections", title: "Détecter les auto-sécants", category: "Auto-sécants", description: "Repère les croisements, contacts et superpositions d’une couche linéaire et exporte leurs points dans un Shapefile.", safety: "read_only" },
  { id: "extract_cable_excel_data", title: "Préparer les données auto-sécantes des câbles", category: "Auto-sécants", description: "Associe les points auto-sécants aux câbles non simples et produit un récapitulatif JSON exploitable pour Excel.", safety: "read_only" },
  { id: "extract_overlap_excel_data", title: "Préparer les superpositions auto-sécantes", category: "Auto-sécants", description: "Regroupe les extrémités des portions superposées par câble et produit un récapitulatif JSON exploitable pour Excel.", safety: "read_only" }
];
const safetyLabels = {
  read_only: ["Lecture seule", ""], creates_copy: ["Crée une copie", ""], output_only: ["Sorties uniquement", ""],
  read_only_network: ["Réseau avec accord", "network"], optional_source_modification: ["Option d’écriture", "caution"]
};
const categoryMarks = { "Chambres": "CH", "Poteaux": "PO", "Portée": "PR", "Tranchées": "TR", "Adresses / BAN": "BA", "ID_PLAQUE": "ID", "Auto-sécants": "AS" };
let activeCategory = "Tous";
const grid = document.querySelector("#tools-grid");
const search = document.querySelector("#tool-search");
const filters = document.querySelector("#category-filters");
const count = document.querySelector("#visible-count");
const emptyState = document.querySelector("#empty-state");
const toolDialog = document.querySelector("#tool-dialog");
const bridgeDialog = document.querySelector("#bridge-dialog");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer); toast.textContent = message; toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3400);
}
function normalize(value) { return value.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function filteredTools() {
  const term = normalize(search.value.trim());
  return tools.filter((tool) => (activeCategory === "Tous" || tool.category === activeCategory) && (!term || normalize(`${tool.title} ${tool.description} ${tool.category}`).includes(term)));
}
function renderFilters() {
  const categories = ["Tous", ...new Set(tools.map((tool) => tool.category))];
  filters.innerHTML = categories.map((category) => `<button class="filter-pill${category === activeCategory ? " is-active" : ""}" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">${category}</button>`).join("");
}
function renderTools() {
  const visible = filteredTools(); count.textContent = visible.length; emptyState.hidden = visible.length !== 0; grid.hidden = visible.length === 0;
  grid.innerHTML = visible.map((tool) => {
    const [safetyText, safetyClass] = safetyLabels[tool.safety];
    return `<article class="tool-card" tabindex="0" role="button" aria-label="Voir ${tool.title}" data-tool-id="${tool.id}">
      <div class="tool-card-top"><span class="tool-icon">${categoryMarks[tool.category]}</span><span class="tool-safety ${safetyClass}">${safetyText}</span></div>
      <h3>${tool.title}</h3><p>${tool.description}</p>
      <div class="tool-card-footer"><span>${tool.category}</span><b aria-hidden="true">→</b></div>
    </article>`;
  }).join("");
}
function openTool(id) {
  const tool = tools.find((item) => item.id === id); if (!tool) return;
  document.querySelector("#dialog-category").textContent = tool.category.toUpperCase();
  document.querySelector("#dialog-title").textContent = tool.title;
  document.querySelector("#dialog-description").textContent = tool.description;
  document.querySelector("#dialog-safety").textContent = safetyLabels[tool.safety][0];
  toolDialog.showModal();
}
function launchApp() {
  showToast("Demande envoyée à Windows. Confirmez l’ouverture de QoD Tools si le navigateur le demande.");
  window.location.href = "qodtools://open";
}
filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]"); if (!button) return;
  activeCategory = button.dataset.category; renderFilters(); renderTools();
});
search.addEventListener("input", renderTools);
grid.addEventListener("click", (event) => { const card = event.target.closest("[data-tool-id]"); if (card) openTool(card.dataset.toolId); });
grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-tool-id]"); if (card) { event.preventDefault(); openTool(card.dataset.toolId); }
});
document.querySelectorAll(".launch-app").forEach((button) => button.addEventListener("click", launchApp));
document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("#show-bridge-help, #open-install-guide").forEach((button) => button.addEventListener("click", () => bridgeDialog.showModal()));
document.querySelector("#reset-filters").addEventListener("click", () => { activeCategory = "Tous"; search.value = ""; renderFilters(); renderTools(); });
const previews = {
  reporting: { image: "assets/reporting-qod-tools.png", alt: "Écran Reporting de QoD Tools", kicker: "REPORTING", title: "Lisez vos livrables en un coup d’œil" },
  filtering: { image: "assets/aide-metier-qod-tools.png", alt: "Tableau filtré des anomalies dans QoD Tools", kicker: "FILTRAGE", title: "Isolez les anomalies utiles à la revue" },
  tracabilite: { image: "assets/resultat-qod-tools.png", alt: "Récapitulatif d’un traitement QoD Tools", kicker: "TRAÇABILITÉ", title: "Conservez la preuve de chaque exécution" }
};
document.querySelectorAll(".feature-copy").forEach((feature) => {
  feature.addEventListener("click", () => {
    document.querySelectorAll(".feature-copy").forEach((item) => { item.classList.remove("is-active"); item.setAttribute("aria-pressed", "false"); });
    feature.classList.add("is-active"); feature.setAttribute("aria-pressed", "true");
    const preview = previews[feature.dataset.preview]; const image = document.querySelector("#feature-image"); image.style.opacity = ".25";
    setTimeout(() => { image.src = preview.image; image.alt = preview.alt; image.style.opacity = ".92"; }, 120);
    document.querySelector("#preview-kicker").textContent = preview.kicker; document.querySelector("#preview-title").textContent = preview.title;
  });
});
renderFilters(); renderTools();
