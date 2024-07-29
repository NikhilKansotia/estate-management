import express from "express";
const router = express.Router();
router.get("/info", (req, res) => {
  res.json({ message: "success" });
});
export default router;
