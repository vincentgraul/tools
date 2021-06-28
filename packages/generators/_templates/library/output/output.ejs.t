---
to: src/index.ts
---

<% h.getFiles("src").forEach(file => { %>export * as <%= h.capitalize(h.getFileName(file)) %> from "./<%= h.getFileName(file) %>";<% }) %>