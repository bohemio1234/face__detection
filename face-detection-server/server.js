import express from "express";
import bcryptnodejs from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";
import fetch from "node-fetch";
import register from "./controllers/register.js";
import signin from "./controllers/signin.js";
import profile from "./controllers/profile.js";
import image from "./controllers/image.js";
import clarifai from "./controllers/clarifai.js";
import dotenv from 'dotenv'

dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "",
    password: "",
    database: "real-smart-brain",
  },
});

const app = express();

app.use(express.json());
app.use(cors());

const CLARIFAI_API_URL =
  "https://api.clarifai.com/v2/models/face-detection/outputs";
const CLARIFAI_PAT = "fdb75dd67a2742e8a87b45d496bb9065";

app.post("/clarifai", async (req, res) => {
  try {
    const requestData = req.body;
    const response = await fetch(CLARIFAI_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + CLARIFAI_PAT,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Clarifai API 요청 실패");
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Clarifai API 요청 오류:", error);
    res.status(500).json({ error: "Clarifai API요청 실패" });
  }
});

app.post("/clarifai", (req, res) => {
  clarifai.handleClarifaiAPI(req, res);
});

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcryptnodejs);
});
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcryptnodejs);
});
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.listen(3000, () => {
  console.log("app is running on port 3000-!!!!");
});
