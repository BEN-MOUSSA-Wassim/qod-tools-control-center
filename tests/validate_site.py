from __future__ import annotations

import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
EXPECTED_CANONICAL = "https://ben-moussa-wassim.github.io/qod-tools-control-center/"


class SiteParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.assets: list[str] = []
        self.ids: set[str] = set()
        self.fragments: list[str] = []
        self.images_without_alt: list[str] = []
        self.unsafe_blank_links: list[str] = []
        self.canonical: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = dict(attrs)
        if data.get("id"):
            self.ids.add(data["id"] or "")
        if tag == "img":
            src = data.get("src") or ""
            self.assets.append(src)
            if not data.get("alt"):
                self.images_without_alt.append(src)
        if tag == "script" and data.get("src"):
            self.assets.append(data["src"] or "")
        if tag == "link" and data.get("href"):
            rel = (data.get("rel") or "").split()
            if "canonical" in rel:
                self.canonical = data["href"]
            elif any(value in rel for value in ("stylesheet", "icon", "manifest")):
                self.assets.append(data["href"] or "")
        if tag == "a" and data.get("href"):
            href = data["href"] or ""
            if href.startswith("#"):
                self.fragments.append(href[1:])
            elif not urlparse(href).scheme:
                self.assets.append(href)
            if data.get("target") == "_blank" and "noopener" not in (data.get("rel") or ""):
                self.unsafe_blank_links.append(href)


def local_path(value: str) -> Path:
    clean = value.split("?", 1)[0].split("#", 1)[0]
    return ROOT / clean


def main() -> None:
    html = INDEX.read_text(encoding="utf-8")
    script = (ROOT / "app.js").read_text(encoding="utf-8")
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    parser = SiteParser()
    parser.feed(html)

    missing = sorted({asset for asset in parser.assets if asset and not local_path(asset).is_file()})
    missing_fragments = sorted({fragment for fragment in parser.fragments if fragment and fragment not in parser.ids})
    private_markers = [marker for marker in ("IOFWASSIM", "Site privé", "Portail privé") if marker in html + script + readme]
    tool_count = len(re.findall(r'\{ id: "[^"]+"', script))

    assert parser.canonical == EXPECTED_CANONICAL, parser.canonical
    assert not missing, f"Missing local assets: {missing}"
    assert not missing_fragments, f"Missing fragment targets: {missing_fragments}"
    assert not parser.images_without_alt, f"Images without alt text: {parser.images_without_alt}"
    assert not parser.unsafe_blank_links, f"Unsafe target=_blank links: {parser.unsafe_blank_links}"
    assert not private_markers, f"Private markers remain: {private_markers}"
    assert tool_count == 14, f"Expected 14 tools, found {tool_count}"
    assert "aria-pressed" in script, "Interactive filter state is not exposed"
    assert (ROOT / ".github/workflows/pages.yml").is_file()
    assert (ROOT / ".nojekyll").is_file()

    print(f"PASS: {tool_count} tools; {len(parser.assets)} local asset references resolve")
    print("PASS: canonical URL, fragments, alt text, public-safety markers, and link safety")


if __name__ == "__main__":
    main()
