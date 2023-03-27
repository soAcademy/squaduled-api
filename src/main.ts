import express, { Application, Request, Response } from "express";
import axios from "axios";
import * as t from "io-ts";
import { AppRoutes } from "./routes";
import dotenv from "dotenv";

// allow cors origins
import cors from "cors";
const app: Application = express();
const PORT = process.env.PROD || 3200;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
dotenv.config();
app.use(cors(corsOptions));

// Structure : ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

app.get("/", (req, res) => res.send("good health"));

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    // cors(corsOptions),
    (request: Request, response: Response) => route.action(request, response)
  );
});

// Structure :
app.listen(PORT, () => {
  console.log(`Server start on port! ${PORT} `);
});
