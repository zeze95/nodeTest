import express from "express";
import { CashService } from "./product";
import { PrductService } from "./cash";

const app = express();

// 상품 구매하기
app.post("/products/buy", (req, res) => {
  // 1. 가진돈 검증하는 코드
  // 금전 관리 관련 클래스
  const cashService = new CashService();
  const hasMoney = cashService.checkValue(); // true false를 반환함
  // 2. 판매여부 검증하는 코드
  // 상품 처리 관련 클래스
  const productService = new PrductService();
  const isSoldOut = productService.checkValue(); // true false를 반환함

  // 3. 상품 구매하는 코드

  // 응답으로 보내야할 내용을 검증을 거쳐서 발송해줌
  if (hasMoney && !isSoldOut) {
    res.send("상품 구매 완료");
  } else if (hasMoney && isSoldOut) {
    res.send("돈은 있으신데 매진됐어요");
  } else if (!hasMoney) {
    res.send("돈이 없으시네요?");
  }
});

// 상품 환불하기
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드
  // ... 구매 여부
  // ... 결제수단 확인
  // ...
  // ...
  // 2. 상품 환불하는 코드
  // if(1이 검증이 된것이 맞으면) {
  // res.send("상품 환불 완료!!");
  // }
});

app.listen(3000);
