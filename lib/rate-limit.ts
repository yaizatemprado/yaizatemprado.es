const hits = new Map<string, number[]>()

const CLEANUP_INTERVAL_MS = 60_000

setInterval(() => {
  const now = Date.now()
  for (const [key, timestamps] of hits) {
    const valid = timestamps.filter((t) => now - t < 60_000)
    if (valid.length === 0) {
      hits.delete(key)
    } else {
      hits.set(key, valid)
    }
  }
}, CLEANUP_INTERVAL_MS)

export function checkRateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 60_000
): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < windowMs)

  if (timestamps.length >= limit) {
    hits.set(ip, timestamps)
    return { allowed: false, remaining: 0 }
  }

  timestamps.push(now)
  hits.set(ip, timestamps)
  return { allowed: true, remaining: limit - timestamps.length }
}
