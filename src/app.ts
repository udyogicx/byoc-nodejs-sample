import express, { Application, Response } from "express";
import bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/healthy", (_, res: Response) => {
  res.send({ status: "heatlhy" });
});

app.get("/", (_, res: Response) => {
  res.send({ msg: "TS App is Running" });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
