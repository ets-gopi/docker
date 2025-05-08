import express from "express";
import { createClient } from "redis";
import process from "process";

const app = express();
const client = await createClient({ url: "redis://redis-server:6379" })
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

await client.set("visits", 0);

app.get("/", async (req, res) => {
  //process.exit(1);
  const value = await client.get("visits");
  const updated = Number(value) + 1;
  await client.set("visits", updated);
  res.send(`views ${updated}`);
});

app.get("/health-check", (req, res) => {
  res.send("i am testing");
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
