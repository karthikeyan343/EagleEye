import { Router, Request, Response } from "express";
import Quote from "../models/Quote";

const router = Router();

router.post(
  "/quote",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        name,
        email,
        phone,
        requirement,
        message,
      } = req.body;

      if (!name || !email) {
        res.status(400).json({
          success: false,
          message: "Name and email are required",
        });
        return;
      }

      if (!requirement) {
        res.status(400).json({
          success: false,
          message: "Solution of interest is required",
        });
        return;
      }

      const quote = await Quote.create({
        name,
        email,
        phone,
        requirement,
        message,
      });

      res.status(201).json({
        success: true,
        message: "Quote request submitted successfully",
        data: quote,
      });
    } catch (error) {
      console.error("Quote submission error:", error);

      res.status(500).json({
        success: false,
        message: "Failed to submit quote request",
      });
    }
  }
);

export default router;