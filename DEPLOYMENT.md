# Deployment Overview

## Artifacts

### 1. Static Frontend Bundle
- HTML, CSS, and JS files produced by `vite build`
- No runtime required — served from any static file host (Apache, nginx, CDN)

### 2. Node.js Backend Server
- Small HTTP server (Hono framework) handling keyword ingestion and serving
- Requires: Node.js v18+, an always-on process (VM or container)
- Requires outbound HTTPS access to reach the cloud LLM API
- One environment variable: `LLM_API_KEY`

### 3. SQLite Database
- Single `.db` file on the server's local filesystem
- Stores parsed keywords — no separate database server needed

---

## Hosting Requirements Summary

| Artifact | Requirement |
|---|---|
| Frontend | Static file hosting |
| Backend | Node.js v18+, persistent process, outbound HTTPS |
| Database | Writable filesystem (no DB server) |

---

## Notes for IT

- The frontend and backend can be hosted on separate servers if needed
- The backend makes outbound calls to a **cloud LLM API** (e.g., Anthropic or OpenAI) for keyword parsing — no LLM is hosted on-premise
- Candidate hosting options under discussion: existing JHU web infrastructure or Hopkins Groups
