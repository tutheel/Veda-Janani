import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dynamoose from "dynamoose";

// ROUTE IMPORTS
import courseRoutes from "./routes/courseRoutes";

// CONFIGURATIONS
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
  dynamoose.aws.ddb.local();
}

const app = express();
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello WORLD!!");
});

app.use("/courses", courseRoutes)

// Server
const port = process.env.PORT || 3000;
if (!isProduction) {
  app.listen(port, () => {
    console.log(`Runn ing in development mode on port ${port}`);
  });
}
