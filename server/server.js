 import express from "express";
    2     import cors from "cors";
    3     import aiRoutes from "./routes/aiRoutes.js"; // 1. Import our new AI routes
    4
    5     const app = express();
    6     const port = 3000;
    7
    8     // MIDDLEWARE
    9     app.use(cors());
   10     app.use(express.json());
   11
   12     // --- ROUTES ---
   13
   14     // 2. Mount the AI routes.
   15     // This tells the app: for any request that starts with "/api/v1/generate-article",
   16     // use the router we defined in aiRoutes.js.
   17     app.use("/api/v1/generate-article", aiRoutes);
   18
   19     // You can keep a simple test route here if you want
   20     app.get("/", (req, res) => {
   21       res.send("Hello from the main server file!");
   22     });
   23
   24     app.listen(port, () => {
   25       console.log(`Server is running on http://localhost:${port}`);
   26     });
   