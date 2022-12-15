import { CashService } from "./product";
import { ProductService } from "./cash";

export class ProductController {
  // 상품 구매 관련
  buyProduct = (req, res) => {
    // 1. 가진돈 검증하는 코드
    // 금전 관리 관련 클래스
    const cashService = new CashService();
    const hasMoney = cashService.checkValue(); // true false를 반환함
    // 2. 판매여부 검증하는 코드
    // 상품 처리 관련 클래스
    const ProductService = new PrductService();
    const isSoldOut = ProductService.checkValue(); // true false를 반환함

    // 3. 상품 구매하는 코드

    // 응답으로 보내야할 내용을 검증을 거쳐서 발송해줌
    if (hasMoney && !isSoldOut) {
      res.send("상품 구매 완료");
    } else if (hasMoney && isSoldOut) {
      res.send("돈은 있으신데 매진됐어요");
    } else if (!hasMoney) {
      res.send("돈이 없으시네요?");
    }
  };

  // 상품 환불 관련
  refundProduct = (req, res) => {
    // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout(); // true 또는 false 리턴

    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("상품 환불 완료!!");
    }
  };
}
