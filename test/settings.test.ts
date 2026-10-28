import { describe, expect, it } from "vitest"
import { defaultSettings, loadSettings } from "../src/config/settings.ts"

describe("loadSettings", () => {
  it("uses defaults when SESSION_TTL unset", () => {
    expect(loadSettings({})).toEqual({ ok: true, value: defaultSettings })
  })
  it("rejects invalid ttl", () => {
    expect(loadSettings({ SESSION_TTL: "abc" }).ok).toBe(false)
  })
  it("parses ttl", () => {
    expect(loadSettings({ SESSION_TTL: "60" })).toEqual({ ok: true, value: { ...defaultSettings, sessionTtlSeconds: 60 } })
  })
})
