import { describe, expect, it } from "vitest"
import { defaultSettings, type Settings } from "../src/config/settings.ts"
import { farewell, greet } from "../src/greet.ts"

describe("greet", () => {
  it("greets the named user with the configured greeting", () => {
    expect(greet("Bob", { ...defaultSettings, greeting: "Hi" })).toEqual({ ok: true, value: "Hi, Bob!" })
  })
  it("falls back to Hello when the greeting is empty", () => {
    expect(greet("Bob", { ...defaultSettings, greeting: "" })).toEqual({ ok: true, value: "Hello, Bob!" })
  })
  it("falls back to Hello when the greeting is missing", () => {
    const settings = { sessionTtlSeconds: 3600 } as Settings
    expect(greet("Bob", settings)).toEqual({ ok: true, value: "Hello, Bob!" })
  })
  it("rejects an empty name", () => {
    expect(greet("", defaultSettings)).toEqual({ ok: false, error: "no name" })
  })
})

describe("farewell", () => {
  it("says goodbye to the named user", () => {
    expect(farewell("ann")).toEqual({ ok: true, value: "Goodbye, ann!" })
  })
  it("rejects an empty name", () => {
    expect(farewell("")).toEqual({ ok: false, error: "no name" })
  })
})
