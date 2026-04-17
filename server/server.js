import express from "express";
import cors from "cors";
import dotenv from "dotenv";

console.log("EXPRESS SERVER STARTED");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// root route
app.get("/", (req, res) => {
res.send("Feature A and B combined update");
});

// start server
const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
