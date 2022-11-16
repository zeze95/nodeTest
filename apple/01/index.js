import express from "express";

const app = express();

// 8080이라는port에 서버를 띄워달라는 뜻
app.listen(3000, function (req, res) {
  console.log("dsds");
  res.send("메인 포트를 여는 페이지");
});
app.get("/new", function (req, res) {
  res.send("자 이제 시작이야 내꿈을 내꿈을 위한 여행 피카츄");
});
