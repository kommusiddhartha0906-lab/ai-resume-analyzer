import express from "express";
import cors from "cors";
import dotenv from "dotenv";

console.log("EXPRESS SERVER STARTED");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Resume Analyzer Backend Running");
});

app.post("/analyze", (req, res) => {
  const { resume } = req.body;

  res.json({
    result: "Resume received: " + resume.substring(0, 50),
  });
});

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
