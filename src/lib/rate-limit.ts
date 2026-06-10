// ─── IN-MEMORY RATE LIMITER ───
// Sliding window rate limiter keyed by IP address.
// For production at scale, use Redis or a distributed store.

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 10; // per window

/**
 * Check if a given IP is rate-limited.
 * Returns { success: true } if allowed, or { success: false, retryAfterMs } if blocked.
 */
export function rateLimit(ip: string): { success: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up stale entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetTime) rateLimitMap.delete(key);
    }
  }

  if (!entry || now > entry.resetTime) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { success: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false, retryAfterMs: entry.resetTime - now };
  }

  entry.count++;
  return { success: true };
}
