import { isOk } from "@core/result.ts"
import { createSession } from "./auth/session.ts"
import { loadSettings } from "./config/settings.ts"
import { greet } from "./greet.ts"

export const main = (env: Record<string, string | undefined>, user: string, now: number): string => {
  const settings = loadSettings(env)
  if (!isOk(settings)) return settings.error
  const session = createSession(user, settings.value, now)
  if (!isOk(session)) return session.error
  const msg = greet(session.value.user, settings.value)
  return isOk(msg) ? msg.value : msg.error
}
