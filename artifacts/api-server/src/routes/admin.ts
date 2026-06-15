import { Router } from "express";
import { db, settingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { createAdminToken, requireAdmin } from "../lib/auth.js";
import { z } from "zod/v4";

const router = Router();

const LoginBody = z.object({ password: z.string().min(1) });

router.post("/admin/login", async (req, res) => {
  const parsed = LoginBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Password required" });
    return;
  }
  const adminPw = process.env["ADMIN_PASSWORD"];
  if (!adminPw || parsed.data.password !== adminPw) {
    await new Promise((r) => setTimeout(r, 600)); // timing defense
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  const token = createAdminToken();
  res.json({ token });
});

router.get("/admin/settings", requireAdmin, async (req, res) => {
  try {
    const rows = await db.select().from(settingsTable);
    const map: Record<string, string> = {};
    for (const r of rows) map[r.key] = r.value;
    res.json({
      whatsappNumber: map["whatsapp_number"] ?? "",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to get admin settings");
    res.status(500).json({ error: "Internal error" });
  }
});

const UpdateBody = z.object({
  whatsappNumber: z.string(),
});

router.put("/admin/settings", requireAdmin, async (req, res) => {
  const parsed = UpdateBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }
  try {
    await db
      .insert(settingsTable)
      .values({ key: "whatsapp_number", value: parsed.data.whatsappNumber })
      .onConflictDoUpdate({
        target: settingsTable.key,
        set: { value: parsed.data.whatsappNumber },
      });
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to update settings");
    res.status(500).json({ error: "Internal error" });
  }
});

export default router;
