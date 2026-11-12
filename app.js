const LANGUAGE_STORAGE_KEY = "qod-tools-language";

const translations = {
  fr: {
    document_title: "QoD Tools — Centre de contrôle",
    meta_description: "Centre de contrôle public de QoD Tools : 14 contrôles qualité SIG, reporting et lancement sécurisé de l'application Windows locale.",
    og_title: "QoD Tools — Centre de contrôle",
    og_description: "Découvrez les 14 contrôles qualité SIG de QoD Tools et ouvrez l'application Windows locale via une passerelle configurable.",
    skip_link: "Aller au contenu",
    brand_home_label: "QoD Tools, accueil",
    brand_subtitle: "Centre de contrôle local",
    language_switch_label: "Choisir la langue du site",
    language_fr_label: "Afficher le site en français",
    language_en_label: "Afficher le site en anglais",
    public_portal: "Portail public · exécution locale",
    open_qod: "Ouvrir QoD Tools",
    hero_eyebrow: "Contrôles qualité SIG • Windows",
    hero_title: "Pilotez vos contrôles QoD depuis un espace clair et sécurisé.",
    hero_lead: "Retrouvez les 14 traitements de votre application locale, préparez votre projet puis ouvrez QoD Tools en un clic. Vos couches SIG restent sur ce poste.",
    launch_local_app: "Lancer l’application locale",
    view_checks: "Voir les contrôles",
    trust_label: "Garanties principales",
    trust_local: "Traitements locaux",
    trust_sources: "Sources protégées",
    trust_network: "Réseau sur consentement",
    hero_visual_label: "Aperçu de l'application QoD Tools",
    window_title: "QoD Tools — Contrôles qualité SIG",
    hero_image_alt: "Écran d’accueil de l’application QoD Tools",
    fourteen_checks: "14 contrôles",
    verified_catalog: "Catalogue local vérifié",
    environment_status_label: "État de l'environnement",
    local_app_required: "Application locale requise",
    windows_separate_installation: "Windows · installation séparée",
    qod_bridge: "Passerelle qodtools://",
    configure_each_computer: "À configurer sur chaque poste",
    catalog_loaded: "Catalogue chargé",
    seven_domains: "7 domaines métier",
    view_guide: "Voir le guide",
    catalog_eyebrow: "Catalogue métier",
    catalog_title: "Trouvez le bon contrôle",
    catalog_description: "Recherchez par couche, anomalie ou résultat attendu. Le traitement s’exécute toujours dans l’application locale.",
    tools_shown: "outils affichés",
    search_label: "Rechercher un contrôle",
    search_placeholder: "Rechercher un contrôle…",
    filter_label: "Filtrer par catégorie",
    empty_title: "Aucun contrôle trouvé",
    empty_description: "Essayez un autre terme ou revenez à toutes les catégories.",
    reset_filters: "Réinitialiser",
    workflow_eyebrow: "Parcours recommandé",
    workflow_title: "Du dossier projet au livrable",
    workflow_step1_title: "Préparer le projet",
    workflow_step1_description: "Regroupez vos Shapefiles ou GeoPackages et leurs fichiers associés dans un dossier accessible.",
    workflow_step2_title: "Ouvrir QoD Tools",
    workflow_step2_description: "Lancez l’application depuis ce portail puis utilisez <strong>Choisir le dossier</strong>.",
    workflow_step3_title: "Exécuter un contrôle",
    workflow_step3_description: "Sélectionnez un outil, vérifiez ses entrées et cliquez sur <strong>Lancer le traitement</strong>.",
    workflow_step4_title: "Analyser les résultats",
    workflow_step4_description: "Consultez le récapitulatif, le journal ou chargez vos CSV dans <strong>Reporting</strong>.",
    start_in_qod: "Commencer dans QoD Tools",
    launch_help: "Aide au lancement",
    features_eyebrow: "Au-delà des contrôles",
    features_title: "Un environnement complet pour la qualité SIG",
    feature_reporting_title: "Reporting CSV",
    feature_reporting_description: "Comparez plusieurs livrables, filtrez les anomalies et exportez une vue sans modifier les sources.",
    feature_filtering_title: "Filtrage des anomalies",
    feature_filtering_description: "Isolez rapidement les erreurs utiles et préparez une vue de contrôle lisible sans toucher aux données sources.",
    feature_trace_title: "Traçabilité technique",
    feature_trace_description: "Chaque exécution produit un manifeste avec version, statut, durée et empreintes des fichiers.",
    bridge_eyebrow: "Connexion Windows",
    bridge_title: "Le site ouvre l’application, vos données restent locales.",
    bridge_description: "Le lien de lancement utilise une passerelle Windows limitée au protocole <code>qodtools://</code>. Il ne donne au site aucun accès à vos fichiers et ne lance aucun traitement sans votre action dans l’application.",
    test_opening: "Tester l’ouverture",
    download_template: "Télécharger le modèle",
    local_qod_tools: "QoD Tools local",
    on_demand_connection: "Connexion à la demande",
    bridge_benefit1: "Ouvre uniquement l’exécutable connu",
    bridge_benefit2: "Aucune donnée SIG dans le navigateur",
    bridge_benefit3: "Désinstallation en un double-clic",
    local_connection_guide: "Guide de connexion locale",
    footer_brand_subtitle: "Contrôles qualité SIG",
    footer_description: "Portail public lié à une application locale — aucune couche SIG n’est téléversée.",
    footer_checks: "Contrôles",
    footer_workflow: "Parcours",
    footer_connection: "Connexion",
    close_label: "Fermer",
    in_application: "Dans l’application",
    dialog_note: "Ouvrez la rubrique indiquée, vérifiez les entrées détectées puis lancez le traitement.",
    first_use: "PREMIÈRE UTILISATION",
    authorize_launch: "Autoriser le lancement local",
    bridge_help_step1: "Installez QoD Tools sur votre poste Windows et repérez le chemin de <code>QoD_Tools.exe</code>.",
    bridge_help_step2: "<a href=\"downloads/qodtools-protocol.example.reg.txt\" download>Téléchargez le modèle de passerelle</a>, remplacez le chemin d’exemple, puis enregistrez-le en fichier <code>.reg</code>.",
    bridge_help_step3: "Ouvrez le fichier adapté, revenez ici et cliquez sur <strong>Ouvrir QoD Tools</strong>.",
    bridge_fine_print: "Le modèle public ne contient aucun chemin personnel. La passerelle doit pointer exclusivement vers l’exécutable QoD Tools choisi sur votre poste.",
    view_tool: "Voir",
    launch_toast: "Demande envoyée à Windows. Confirmez l’ouverture de QoD Tools si le navigateur le demande."
  },
  en: {
    document_title: "QoD Tools — Control Center",
    meta_description: "Public QoD Tools control center: 14 GIS quality checks, reporting, and secure launch of the local Windows application.",
    og_title: "QoD Tools — Control Center",
    og_description: "Explore 14 QoD Tools GIS quality checks and open the local Windows application through a configurable bridge.",
    skip_link: "Skip to content",
    brand_home_label: "QoD Tools, home",
    brand_subtitle: "Local control center",
    language_switch_label: "Choose site language",
    language_fr_label: "Show the site in French",
    language_en_label: "Show the site in English",
    public_portal: "Public portal · local processing",
    open_qod: "Open QoD Tools",
    hero_eyebrow: "GIS quality checks • Windows",
    hero_title: "Run your QoD checks from a clear, secure workspace.",
    hero_lead: "Access the 14 processes in your local application, prepare your project, then open QoD Tools in one click. Your GIS layers remain on this computer.",
    launch_local_app: "Launch local application",
    view_checks: "View checks",
    trust_label: "Key safeguards",
    trust_local: "Local processing",
    trust_sources: "Source data protected",
    trust_network: "Network access with consent",
    hero_visual_label: "QoD Tools application preview",
    window_title: "QoD Tools — GIS quality checks",
    hero_image_alt: "QoD Tools application home screen",
    fourteen_checks: "14 checks",
    verified_catalog: "Verified local catalog",
    environment_status_label: "Environment status",
    local_app_required: "Local application required",
    windows_separate_installation: "Windows · separate installation",
    qod_bridge: "qodtools:// bridge",
    configure_each_computer: "Configure on each computer",
    catalog_loaded: "Catalog loaded",
    seven_domains: "7 business domains",
    view_guide: "View guide",
    catalog_eyebrow: "Business catalog",
    catalog_title: "Find the right check",
    catalog_description: "Search by layer, issue, or expected output. Processing always runs in the local application.",
    tools_shown: "tools shown",
    search_label: "Search for a check",
    search_placeholder: "Search for a check…",
    filter_label: "Filter by category",
    empty_title: "No checks found",
    empty_description: "Try another term or return to all categories.",
    reset_filters: "Reset",
    workflow_eyebrow: "Recommended workflow",
    workflow_title: "From project folder to deliverable",
    workflow_step1_title: "Prepare the project",
    workflow_step1_description: "Place your Shapefiles or GeoPackages and their related files in an accessible folder.",
    workflow_step2_title: "Open QoD Tools",
    workflow_step2_description: "Launch the application from this portal, then use <strong>Select folder</strong>.",
    workflow_step3_title: "Run a check",
    workflow_step3_description: "Select a tool, review its inputs, and click <strong>Run processing</strong>.",
    workflow_step4_title: "Analyze the results",
    workflow_step4_description: "Review the summary and log, or load your CSV files in <strong>Reporting</strong>.",
    start_in_qod: "Get started in QoD Tools",
    launch_help: "Launch help",
    features_eyebrow: "Beyond checks",
    features_title: "A complete environment for GIS quality",
    feature_reporting_title: "CSV Reporting",
    feature_reporting_description: "Compare multiple deliverables, filter issues, and export a view without modifying source data.",
    feature_filtering_title: "Issue filtering",
    feature_filtering_description: "Quickly isolate relevant errors and prepare a clear review view without changing source data.",
    feature_trace_title: "Technical traceability",
    feature_trace_description: "Each run produces a manifest with the version, status, duration, and file fingerprints.",
    bridge_eyebrow: "Windows connection",
    bridge_title: "The site opens the application; your data stays local.",
    bridge_description: "The launch link uses a Windows bridge limited to the <code>qodtools://</code> protocol. It gives the site no access to your files and never starts processing without an action from you in the application.",
    test_opening: "Test launch",
    download_template: "Download template",
    local_qod_tools: "Local QoD Tools",
    on_demand_connection: "On-demand connection",
    bridge_benefit1: "Opens only the configured executable",
    bridge_benefit2: "No GIS data in the browser",
    bridge_benefit3: "Uninstall with a double-click",
    local_connection_guide: "Local connection guide",
    footer_brand_subtitle: "GIS quality checks",
    footer_description: "Public portal linked to a local application — no GIS layers are uploaded.",
    footer_checks: "Checks",
    footer_workflow: "Workflow",
    footer_connection: "Connection",
    close_label: "Close",
    in_application: "In the application",
    dialog_note: "Open the indicated section, review the detected inputs, then run the process.",
    first_use: "FIRST USE",
    authorize_launch: "Enable local launch",
    bridge_help_step1: "Install QoD Tools on your Windows computer and note the full path to <code>QoD_Tools.exe</code>.",
    bridge_help_step2: "<a href=\"downloads/qodtools-protocol.example.reg.txt\" download>Download the bridge template</a>, replace the example path, then save it as a <code>.reg</code> file.",
    bridge_help_step3: "Open the customized file, return here, and click <strong>Open QoD Tools</strong>.",
    bridge_fine_print: "The public template contains no personal path. The bridge must point exclusively to the QoD Tools executable selected on your computer.",
    view_tool: "View",
    launch_toast: "Request sent to Windows. Confirm that you want to open QoD Tools if prompted by your browser."
  }
};

const categories = {
  chambers: { mark: "CH", label: { fr: "Chambres", en: "Chambers" } },
  poles: { mark: "PO", label: { fr: "Poteaux", en: "Poles" } },
  spans: { mark: "PR", label: { fr: "Portée", en: "Spans" } },
  trenches: { mark: "TR", label: { fr: "Tranchées", en: "Trenches" } },
  addresses: { mark: "BA", label: { fr: "Adresses / BAN", en: "Addresses / BAN" } },
  plate_id: { mark: "ID", label: { fr: "ID_PLAQUE", en: "ID_PLAQUE" } },
  self_intersections: { mark: "AS", label: { fr: "Auto-sécants", en: "Self-intersections" } }
};

const tools = [
  { id: "filtrer_references_chambres", category: "chambers", safety: "read_only", title: { fr: "Contrôler la REFERENCE des chambres", en: "Check chamber REFERENCE" }, description: { fr: "Exporte les chambres dont la référence ne respecte pas la forme XXX_CODE_CH1_CODE_INSEE. La couche source reste en lecture seule.", en: "Exports chambers whose REFERENCE does not match the XXX_CODE_CH1_CODE_INSEE pattern. The source layer remains read-only." } },
  { id: "detection_doublons_chambres", category: "chambers", safety: "read_only", title: { fr: "Détecter les doublons de chambres", en: "Detect duplicate chambers" }, description: { fr: "Recherche les chambres qui partagent exactement la même REFERENCE et exporte chaque paire dans un CSV. La couche source reste en lecture seule.", en: "Finds chambers that share exactly the same REFERENCE and exports each pair to a CSV file. The source layer remains read-only." } },
  { id: "appliquer_corrections_chambres", category: "chambers", safety: "creates_copy", title: { fr: "Créer une couche Chambre corrigée", en: "Create a corrected Chamber layer" }, description: { fr: "Crée une nouvelle couche GeoPackage et applique les corrections NUMERO, LIBELLE et CODE_POSTAL. L’original n’est jamais modifié.", en: "Creates a new GeoPackage layer and applies corrections to NUMERO, LIBELLE, and CODE_POSTAL. The original is never modified." } },
  { id: "controle_reference_poteaux", category: "poles", safety: "read_only", title: { fr: "Auditer la REFERENCE des poteaux", en: "Audit pole REFERENCE" }, description: { fr: "Exporte les poteaux dont la REFERENCE ne respecte pas la règle métier attendue. Un numéro absent est remplacé par XXXXXX.", en: "Exports poles whose REFERENCE does not follow the expected business rule. A missing number is replaced with XXXXXX." } },
  { id: "controle_reference_portees", category: "spans", safety: "read_only", title: { fr: "Auditer la REFERENCE des portées", en: "Audit span REFERENCE" }, description: { fr: "Exporte les portées dont la REFERENCE n’est pas égale à PRT suivi de l’OBJECTID. La couche source reste en lecture seule.", en: "Exports spans whose REFERENCE is not equal to PRT followed by OBJECTID. The source layer remains read-only." } },
  { id: "controle_reference_tranchee", category: "trenches", safety: "optional_source_modification", title: { fr: "Contrôler la REFERENCE des tranchées", en: "Check trench REFERENCE" }, description: { fr: "Retrouve les équipements aux extrémités et prépare la référence attendue. Le mode simulation est activé par défaut.", en: "Identifies the equipment at each endpoint and prepares the expected reference. Simulation mode is enabled by default." } },
  { id: "detection_doublons_tranchee", category: "trenches", safety: "read_only", title: { fr: "Détecter les doublons de tranchées", en: "Detect duplicate trenches" }, description: { fr: "Regroupe les liaisons identiques dans les deux sens et calcule leur similarité géométrique. Lecture seule des couches.", en: "Groups identical links in both directions and calculates their geometric similarity. Layers are read-only." } },
  { id: "controle_adresses_chambres", category: "addresses", safety: "read_only_network", title: { fr: "Contrôler les adresses avec la BAN", en: "Check addresses with BAN" }, description: { fr: "Compare les adresses des chambres au géocodage inverse officiel et génère uniquement des CSV de propositions.", en: "Compares chamber addresses with official reverse geocoding and generates proposal CSV files only." } },
  { id: "consolider_recontrole_adresses", category: "addresses", safety: "output_only", title: { fr: "Consolider le recontrôle des adresses", en: "Consolidate address recheck" }, description: { fr: "Fusionne les résultats du second contrôle et de la reprise des erreurs API dans un dossier final.", en: "Merges the results of the second check and API error recovery into a final folder." } },
  { id: "correction_code_plaque", category: "plate_id", safety: "read_only", title: { fr: "Calculer les corrections ID_PLAQUE", en: "Calculate ID_PLAQUE corrections" }, description: { fr: "Calcule les plaques des chambres et poteaux depuis les câbles, puis celles des tranchées depuis leurs extrémités.", en: "Calculates chamber and pole ID_PLAQUE values from cables, then trench ID_PLAQUE values from their endpoints." } },
  { id: "controle_chamberusa", category: "chambers", safety: "read_only", title: { fr: "Contrôler l’USAGE des chambres", en: "Check chamber USAGE" }, description: { fr: "Déduit CHAMBERUSA depuis la topologie chambres–boîtes–câbles et exporte les propositions par règle.", en: "Derives CHAMBERUSA from chamber–box–cable topology and exports proposals by rule." } },
  { id: "detect_self_intersections", category: "self_intersections", safety: "read_only", title: { fr: "Détecter les auto-sécants", en: "Detect self-intersections" }, description: { fr: "Repère les croisements, contacts et superpositions d’une couche linéaire et exporte leurs points dans un Shapefile.", en: "Identifies crossings, contacts, and overlaps in a line layer and exports their points to a Shapefile." } },
  { id: "extract_cable_excel_data", category: "self_intersections", safety: "read_only", title: { fr: "Préparer les données auto-sécantes des câbles", en: "Prepare cable self-intersection data" }, description: { fr: "Associe les points auto-sécants aux câbles non simples et produit un récapitulatif JSON exploitable pour Excel.", en: "Associates self-intersection points with non-simple cables and produces a JSON summary for Excel." } },
  { id: "extract_overlap_excel_data", category: "self_intersections", safety: "read_only", title: { fr: "Préparer les superpositions auto-sécantes", en: "Prepare self-overlap data" }, description: { fr: "Regroupe les extrémités des portions superposées par câble et produit un récapitulatif JSON exploitable pour Excel.", en: "Groups the endpoints of overlapping segments by cable and produces a JSON summary for Excel." } }
];

const safetyLabels = {
  read_only: { label: { fr: "Lecture seule", en: "Read-only" }, className: "" },
  creates_copy: { label: { fr: "Crée une copie", en: "Creates a copy" }, className: "" },
  output_only: { label: { fr: "Sorties uniquement", en: "Output only" }, className: "" },
  read_only_network: { label: { fr: "Réseau avec accord", en: "Network with consent" }, className: "network" },
  optional_source_modification: { label: { fr: "Option d’écriture", en: "Write option" }, className: "caution" }
};

const previews = {
  reporting: {
    image: "assets/reporting-qod-tools.png",
    alt: { fr: "Écran Reporting de QoD Tools", en: "QoD Tools Reporting screen" },
    kicker: { fr: "REPORTING", en: "REPORTING" },
    title: { fr: "Lisez vos livrables en un coup d’œil", en: "Review your deliverables at a glance" }
  },
  filtering: {
    image: "assets/aide-metier-qod-tools.png",
    alt: { fr: "Tableau filtré des anomalies dans QoD Tools", en: "Filtered issue table in QoD Tools" },
    kicker: { fr: "FILTRAGE", en: "FILTERING" },
    title: { fr: "Isolez les anomalies utiles à la revue", en: "Isolate the issues that matter for review" }
  },
  tracabilite: {
    image: "assets/resultat-qod-tools.png",
    alt: { fr: "Récapitulatif d’un traitement QoD Tools", en: "QoD Tools process summary" },
    kicker: { fr: "TRAÇABILITÉ", en: "TRACEABILITY" },
    title: { fr: "Conservez la preuve de chaque exécution", en: "Keep evidence of every run" }
  }
};

let currentLanguage = readStoredLanguage();
let activeCategory = "all";
let toastTimer;

const grid = document.querySelector("#tools-grid");
const search = document.querySelector("#tool-search");
const filters = document.querySelector("#category-filters");
const count = document.querySelector("#visible-count");
const emptyState = document.querySelector("#empty-state");
const toolDialog = document.querySelector("#tool-dialog");
const bridgeDialog = document.querySelector("#bridge-dialog");
const toast = document.querySelector("#toast");

function readStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === "en" || storedLanguage === "fr" ? storedLanguage : "fr";
  } catch {
    return "fr";
  }
}

function translate(key) {
  return translations[currentLanguage][key] ?? translations.fr[key] ?? key;
}

function localized(value) {
  return value[currentLanguage] ?? value.fr;
}

function categoryLabel(categoryId) {
  return localized(categories[categoryId].label);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3400);
}

function normalize(value) {
  return value.toLocaleLowerCase(currentLanguage).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filteredTools() {
  const term = normalize(search.value.trim());
  return tools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    const searchable = `${tool.title.fr} ${tool.title.en} ${tool.description.fr} ${tool.description.en} ${categories[tool.category].label.fr} ${categories[tool.category].label.en}`;
    return matchesCategory && (!term || normalize(searchable).includes(term));
  });
}

function renderFilters() {
  const categoryIds = [...new Set(tools.map((tool) => tool.category))];
  const allLabel = currentLanguage === "fr" ? "Tous" : "All";
  filters.innerHTML = [
    `<button class="filter-pill${activeCategory === "all" ? " is-active" : ""}" type="button" data-category="all" aria-pressed="${activeCategory === "all"}">${allLabel}</button>`,
    ...categoryIds.map((categoryId) => `<button class="filter-pill${categoryId === activeCategory ? " is-active" : ""}" type="button" data-category="${categoryId}" aria-pressed="${categoryId === activeCategory}">${categoryLabel(categoryId)}</button>`)
  ].join("");
}

function renderTools() {
  const visible = filteredTools();
  count.textContent = visible.length;
  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  grid.innerHTML = visible.map((tool) => {
    const safety = safetyLabels[tool.safety];
    const title = localized(tool.title);
    return `<article class="tool-card" tabindex="0" role="button" aria-label="${translate("view_tool")} ${title}" data-tool-id="${tool.id}">
      <div class="tool-card-top"><span class="tool-icon">${categories[tool.category].mark}</span><span class="tool-safety ${safety.className}">${localized(safety.label)}</span></div>
      <h3>${title}</h3><p>${localized(tool.description)}</p>
      <div class="tool-card-footer"><span>${categoryLabel(tool.category)}</span><b aria-hidden="true">→</b></div>
    </article>`;
  }).join("");
}

function populateToolDialog(tool) {
  toolDialog.dataset.toolId = tool.id;
  document.querySelector("#dialog-category").textContent = categoryLabel(tool.category).toUpperCase();
  document.querySelector("#dialog-title").textContent = localized(tool.title);
  document.querySelector("#dialog-description").textContent = localized(tool.description);
  document.querySelector("#dialog-safety").textContent = localized(safetyLabels[tool.safety].label);
}

function openTool(id) {
  const tool = tools.find((item) => item.id === id);
  if (!tool) return;
  populateToolDialog(tool);
  if (!toolDialog.open) toolDialog.showModal();
}

function updatePreview(previewId, animate = false) {
  const preview = previews[previewId];
  if (!preview) return;
  const image = document.querySelector("#feature-image");
  const applyPreview = () => {
    image.src = preview.image;
    image.alt = localized(preview.alt);
    image.style.opacity = ".92";
  };
  if (animate) {
    image.style.opacity = ".25";
    setTimeout(applyPreview, 120);
  } else {
    applyPreview();
  }
  document.querySelector("#preview-kicker").textContent = localized(preview.kicker);
  document.querySelector("#preview-title").textContent = localized(preview.title);
}

function activateFeature(feature, animate = true) {
  document.querySelectorAll(".feature-copy").forEach((item) => {
    const isActive = item === feature;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  updatePreview(feature.dataset.preview, animate);
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = translate("document_title");
  document.querySelector("#meta-description").setAttribute("content", translate("meta_description"));
  document.querySelector("#og-title").setAttribute("content", translate("og_title"));
  document.querySelector("#og-description").setAttribute("content", translate("og_description"));
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt));
  });
}

function setLanguage(language, persist = true) {
  if (language !== "fr" && language !== "en") return;
  currentLanguage = language;
  if (persist) {
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage); } catch { /* Storage is optional. */ }
  }
  applyStaticTranslations();
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderFilters();
  renderTools();
  if (toolDialog.dataset.toolId) {
    const openToolData = tools.find((tool) => tool.id === toolDialog.dataset.toolId);
    if (openToolData) populateToolDialog(openToolData);
  }
  const activeFeature = document.querySelector(".feature-copy.is-active");
  if (activeFeature) updatePreview(activeFeature.dataset.preview);
}

function launchApp() {
  showToast(translate("launch_toast"));
  window.location.href = "qodtools://open";
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderTools();
});

search.addEventListener("input", renderTools);

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-tool-id]");
  if (card) openTool(card.dataset.toolId);
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-tool-id]");
  if (card) {
    event.preventDefault();
    openTool(card.dataset.toolId);
  }
});

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelectorAll(".launch-app").forEach((button) => button.addEventListener("click", launchApp));
document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("#show-bridge-help, #open-install-guide").forEach((button) => button.addEventListener("click", () => bridgeDialog.showModal()));
document.querySelector("#reset-filters").addEventListener("click", () => {
  activeCategory = "all";
  search.value = "";
  renderFilters();
  renderTools();
});
document.querySelectorAll(".feature-copy").forEach((feature) => {
  feature.addEventListener("click", () => activateFeature(feature));
  feature.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    activateFeature(feature);
  });
});

setLanguage(currentLanguage, false);
