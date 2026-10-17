# We Do Care Global website

Approved design and website fixes for https://wedocare-global.com/.

The site preserves the original brand video and artwork. Six static project pages distinguish published originals, Next development, documentation, demonstrations and DOI records. Contact prepares, copies or downloads an inquiry locally; no server delivery is claimed.

## Hosting provenance
Current production is served from `we-do-care-global/we-do-care-global`, `main:/docs`, with the existing domain configuration. This organizational repository keeps the matching website source at its root. This update does not migrate the domain or create a second Pages domain binding.

## Validation
Run `python3 scripts/check_site.py .` and `node --check app.js`, `node --check shared.js`, `node --check project-demos.js`.

See WEBSITE_AUDIT_FIXES.md for changes, verification limits and remaining infrastructure requirements. No build step is needed.
