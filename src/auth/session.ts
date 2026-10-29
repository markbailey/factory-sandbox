import { err, ok, type Result } from "@core/result.ts"
import type { Settings } from "../config/settings.ts"

export interface Session {
  user: string
  expiresAt: number
}

export const createSession = (user: string, settings: Settings, now: number): Result<Session> =>
  user.trim() === "" ? err("empty user") : ok({ user, expiresAt: now + settings.sessionTtlSeconds * 1000 })

export const isExpired = (session: Session, now: number): boolean => now >= session.expiresAt

export const refreshSession = (session: Session, settings: Settings, now: number): Result<Session> =>
  isExpired(session, now)
    ? err("session expired")
    : ok({ user: session.user, expiresAt: now + settings.sessionTtlSeconds * 1000 })
