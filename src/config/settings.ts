import { err, ok, type Result } from "@core/result.ts"

export interface Settings {
  sessionTtlSeconds: number
  greeting: string
}

export const defaultSettings: Settings = { sessionTtlSeconds: 3600, greeting: "Hello" }

export const loadSettings = (env: Record<string, string | undefined>): Result<Settings> => {
  const raw = env.SESSION_TTL
  if (raw === undefined) return ok(defaultSettings)
  const ttl = Number(raw)
  if (!Number.isInteger(ttl) || ttl <= 0) return err(`invalid SESSION_TTL: ${raw}`)
  return ok({ ...defaultSettings, sessionTtlSeconds: ttl })
}
