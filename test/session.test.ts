import { describe, expect, it } from "vitest"
import { createSession, isExpired } from "../src/auth/session.ts"
import { defaultSettings } from "../src/config/settings.ts"

describe("session", () => {
  it("rejects empty user", () => {
    expect(createSession(" ", defaultSettings, 0).ok).toBe(false)
  })
  it("expires after ttl", () => {
    const r = createSession("ann", defaultSettings, 0)
    if (!r.ok) throw new Error(r.error)
    expect(isExpired(r.value, 3599_999)).toBe(false)
    expect(isExpired(r.value, 3600_000)).toBe(true)
  })
})
