import express from "express";

const app = express();
const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
// GET 요청이 들어왔을 때
app.get("/", function (req, res) {
  res.send(fruits); // 응답 보내기
});

app.listen(3000); // 3000번 포트에서 실행
