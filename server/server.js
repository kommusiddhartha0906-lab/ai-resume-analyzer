import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("AI Resume Analyzer Backend Running");
});

// basic API route
app.post("/analyze", (req, res) => {
  const { resume } = req.body;

  if (!resume) {
    return res.status(400).json({ error: "Resume is required" });
  }

  // dummy logic (we'll replace with AI later)
  const wordCount = resume.split(" ").length;

  res.json({
    message: "Resume analyzed successfully",
    wordCount: wordCount,
    score: Math.min(100, wordCount), // fake score for now
  });
});

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
