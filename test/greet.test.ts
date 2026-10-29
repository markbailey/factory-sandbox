import { describe, expect, it } from "vitest"
import { farewell } from "../src/greet.ts"

describe("farewell", () => {
  it("says goodbye to the named user", () => {
    expect(farewell("ann")).toEqual({ ok: true, value: "Goodbye, ann!" })
  })
  it("rejects an empty name", () => {
    expect(farewell("")).toEqual({ ok: false, error: "no name" })
  })
})
