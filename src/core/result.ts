/** Core module: imported by most others (fan-in target). */
export type Result<T> = { ok: true; value: T } | { ok: false; error: string }

export const ok = <T>(value: T): Result<T> => ({ ok: true, value })
export const err = <T = never>(error: string): Result<T> => ({ ok: false, error })

export const isOk = <T>(r: Result<T>): r is { ok: true; value: T } => r.ok
