import { err, ok, type Result } from "@core/result.ts"
import { defaultSettings, type Settings } from "./config/settings.ts"

export const greet = (name: string, settings: Settings): Result<string> =>
  name ? ok(`${settings.greeting || defaultSettings.greeting}, ${name}!`) : err("no name")

export const farewell = (who: string): Result<string> =>
  who ? ok(`Goodbye, ${who}!`) : err("no name")
