import express from "express";
import cors from "./middlewares/cors";
import "reflect-metadata";

export const app = express();
app.set("x-powered-by", false);
app.set("trust proxy", true);
app.enable("trust proxy");

app.use(cors);
app.use(express.json({ limit: "50mb" }));
