import express, { Request, Response } from "express";
import { indexController } from "./controllers/index.controller";
import indexRouter from "./routes/index";

const app: any = express();
const port = process.env.PORT || 3000;

app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
