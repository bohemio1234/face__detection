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
  connection: process.env.DATABASE_URL,
});

const app = express();

app.use(express.json());
app.use(cors());

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
