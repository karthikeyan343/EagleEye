import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import quoteRoutes from "./routes/quoteRoutes";
import contactRoutes from "./routes/contactRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:5173";

// Middleware
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "EagleEye Solution Backend is running",
  });
});

// API routes
app.use("/api", quoteRoutes);
app.use("/api", contactRoutes);

// Start server
const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();