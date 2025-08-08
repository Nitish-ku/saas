import express from "express";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js"; // 1. Import our new AI routes

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 2. Mount the AI routes.
// This tells the app: for any request that starts with "/api/v1/generate-article",
// use the router we defined in aiRoutes.js.
  app.use("/api/v1/generate-article", aiRoutes);

// You can keep a simple test route here if you want
app.get("/", (req, res) => {
res.send("Hello from the main server file!");
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
