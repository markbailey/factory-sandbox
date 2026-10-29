import { describe, expect, it } from "vitest"
import { createSession, isExpired, renewSession } from "../src/auth/session.ts"
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
  it("refresh extends expiry", () => {
    const r = renewSession({ user: "ann", expiresAt: 3600_000 }, defaultSettings, 1000_000)
    if (!r.ok) throw new Error(r.error)
    expect(r.value).toEqual({ user: "ann", expiresAt: 4600_000 })
  })
  it("refresh of expired session returns an error", () => {
    expect(renewSession({ user: "ann", expiresAt: 3600_000 }, defaultSettings, 3600_000)).toEqual({
      ok: false,
      error: "session expired",
    })
  })
})
