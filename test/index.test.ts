import { describe, expect, it } from "vitest"
import { main } from "../src/index.ts"

describe("main", () => {
  it("greets the session user", () => {
    expect(main({}, "ann", 0)).toBe("Hello, ann!")
  })
  it("reports config errors", () => {
    expect(main({ SESSION_TTL: "-1" }, "ann", 0)).toBe("invalid SESSION_TTL: -1")
  })
})
