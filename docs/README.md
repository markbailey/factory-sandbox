# factory-sandbox

Test target for the software factory. Tiny TS + Python seed.

- `src/` — TS modules; `src/core/result.ts` is the shared core (high fan-in).
- `src/auth/` — hits the `high` path floor; `src/config/` — hits the `medium` floor.
- `py/sandbox/` — Python package; `util.py` is the core module.

```sh
npm ci
npm run test:all   # vitest + pytest
npm run typecheck
```
