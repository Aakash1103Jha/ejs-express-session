import express from "express";
import cors from "cors";
import session from "express-session";
import { resolve } from "path";

import { errorHandler } from "../middlewares/errorHandler";
import { SESSION_OPTIONS } from "./session";

import CommonRoutes from "../routes/common-routes";

const app = express();

app.disable("x-powered-by");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session(SESSION_OPTIONS));

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "..", "views", "pages"));
app.use(express.static(resolve(__dirname, "..", "views", "pages", "partials")));
app.use(express.static(resolve(__dirname, "..", "public")));

app.use("/", CommonRoutes);

app.use(errorHandler);

export default app;
