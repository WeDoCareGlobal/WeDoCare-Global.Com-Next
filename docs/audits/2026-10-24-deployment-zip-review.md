# Deployment ZIP selective integration review — 2026-10-24

## Scope and decision

Source archive: `WeDoCare-Global-Deployment(1).zip` (user-supplied).
**Decision: do not replace production or Next project HTML with the five `*-fixed.html` files.**
This is an audit-only PR; it does not change website behavior.

## Verified archive contents

- Five stand-alone HTML pages: AgentGuard, AgentVault, Agent Eval, Enterprise Hybrid-RAG, FoundationCentar.
- Six subagent JSON result files and a planning preview.
- A local `.git` directory and `reject_recreate.bat`.
- No `index.html`, `omniguard.html`, `pharma-intelligence-os.html` or `evidence.html` in the ZIP.
- The HTML pages use a common external Font Awesome CDN URL and link to `github.com/WeDoCareGlobal`. They do not contain application backends.
- The ZIP is not evidence that infrastructure deployments, integration tests or marketplace submissions succeeded.

## Repository comparison

- `agentguard.html` already exists at repository root on `main` (blob `4a4fdc853b01d4f1474af108fba940065bf3701b`; 5,823 characters).
- `WeDoCareGlobal/we-do-care-global/docs/agentguard.html` is a distinct, much larger published-source version (68,474 characters at inspection).
- The ZIP's `agentguard-fixed.html` is 3,543 bytes, and does not establish a safe replacement for either.
- The ZIP contains no verifiable regression tests, deployment identifiers, or code changes to the seven portfolio services.

## Published portfolio scope

The published homepage presents seven systems: OmniGuard inspection gateway; AgentGuard; AgentVault; Enterprise Hybrid-RAG; Agent Eval; FoundationCentar; Pharma Intelligence OS.

Do not promote unrelated repository or Vercel project names into the published portfolio merely because they exist.

## Follow-up acceptance tests before any code integration

1. Compare each candidate change at element/behavior level against its canonical page.
2. Demonstrate a specific regression and a minimal fix; avoid full-page replacement.
3. Run `scripts/check_site.py` and JavaScript syntax checks.
4. Verify internal links, CSP, accessibility, fonts, and mobile presentation.
5. Test staging in a real browser, including forms and any media/range redirects.
6. Document evidence and obtain review before merge.

## Existing cutover work

PR #6 (`fix/vercel-cutover-preparation-20261023`) is a separate draft staging-cutover PR. Do not merge it as part of this ZIP audit. Domain transfer and production cutover require independent approval and rollback verification.

## Safety

Do not execute `reject_recreate.bat`; do not publish the ZIP's `.git` contents; do not import its subagent completion claims as verified facts.
