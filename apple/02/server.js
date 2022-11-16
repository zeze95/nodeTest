import express from "express";
import path from "path";
import bodyParser from "body-parser";

// import { mongodb } from "mongodb";
// const app = express();
// const __dirname = path.resolve();
// const Mongo = mongodb.MongoClient;

// Mongo.connect(
//   "mongodb+srv://admin:514233@cluster0.etovluk.mongodb.net/?retryWrites=true&w=majority",
//   function (err, client) {
//     if (err) return console.log(err);
//     app.listen(8080, function () {
//       console.log("listening on 3000");
//     });
//   }
// );

const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://admin:514233@cluster0.etovluk.mongodb.net/?retryWrites=true&w=majority",
  function (에러, client) {
    if (에러) return console.log(에러);
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  }
);

// 8080이라는port에 서버를 띄워달라는 뜻
app.listen(3000, function (req, res) {
  console.log(res);
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log(res);
});

app.get("/write", (req, res) => {
  res.sendFile(__dirname + "/write.html");
});

// input으로 전송된 정보는 req에 저장되어있는것
app.post("/add", (req, res) => {
  res.send("전송 완료");
  console.log(req.body.date);
  console.log(req.body.title);
});
