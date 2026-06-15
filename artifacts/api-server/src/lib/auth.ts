import { createHmac, timingSafeEqual } from "crypto";
import type { Request, Response, NextFunction } from "express";

const SECRET = process.env["SESSION_SECRET"]!;
const TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

export function createAdminToken(): string {
  const data = Buffer.from(JSON.stringify({ ts: Date.now() })).toString("base64url");
  const sig = createHmac("sha256", SECRET).update(data).digest("base64url");
  return `${data}.${sig}`;
}

export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  const idx = token.lastIndexOf(".");
  if (idx < 1) return false;
  const data = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  try {
    const expected = createHmac("sha256", SECRET).update(data).digest("base64url");
    const a = Buffer.from(sig, "base64url");
    const b = Buffer.from(expected, "base64url");
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
    const { ts } = JSON.parse(Buffer.from(data, "base64url").toString("utf8")) as { ts: number };
    return Date.now() - ts < TTL_MS;
  } catch {
    return false;
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const auth = (req.headers["authorization"] as string) ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!verifyAdminToken(token)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}
