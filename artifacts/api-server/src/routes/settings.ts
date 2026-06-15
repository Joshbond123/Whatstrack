import { Router } from "express";
import { db, settingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/settings", async (req, res) => {
  try {
    const row = await db
      .select()
      .from(settingsTable)
      .where(eq(settingsTable.key, "whatsapp_number"))
      .limit(1);
    res.json({ whatsappNumber: row[0]?.value ?? "" });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch settings");
    res.json({ whatsappNumber: "" });
  }
});

export default router;
