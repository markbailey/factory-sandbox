import { err, ok, type Result } from "@core/result.ts"
import { defaultSettings, type Settings } from "./config/settings.ts"

export const greet = (name: string, settings: Settings): Result<string> =>
  name ? ok(`${settings.greeting || defaultSettings.greeting}, ${name}!`) : err("no name")

/**
 * Builds a farewell message for `who`.
 * Leading and trailing whitespace is trimmed first; an empty or
 * whitespace-only name yields an `err("no name")` result.
 */
export const farewell =(who: string): Result<string> => {
  const trimmed = who.trim()
  return trimmed ? ok(`Goodbye, ${trimmed}!`) : err("no name")
}
