import { err, ok, type Result } from "@core/result.ts"
import { defaultSettings, type Settings } from "./config/settings.ts"

export const greet = (name: string, settings: Settings): Result<string> =>
  name ? ok(`${settings.greeting || defaultSettings.greeting}, ${name}!`) : err("no name")

export const farewell = (name: string): Result<string> => {
  const trimmed = name.trim()
  return trimmed ? ok(`Goodbye, ${trimmed}!`) : err("no name")
}
