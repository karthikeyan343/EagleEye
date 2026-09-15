import { Router, Request, Response } from "express";
import Contact from "../models/Contact";

const router = Router();

router.post(
  "/contact",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !message) {
        res.status(400).json({
          success: false,
          message: "Name, email and message are required",
        });
        return;
      }

      const contact = await Contact.create({
        name,
        email,
        phone,
        message,
      });

      res.status(201).json({
        success: true,
        message: "Contact request submitted successfully",
        data: contact,
      });
    } catch (error) {
      console.error("Contact submission error:", error);

      res.status(500).json({
        success: false,
        message: "Failed to submit contact request",
      });
    }
  }
);

export default router;