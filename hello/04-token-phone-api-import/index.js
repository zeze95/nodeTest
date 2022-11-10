import { LenCheck, pushNum, pushToken } from "./phone.js";

function createTokenOfPhone(phone) {
  const isValid = LenCheck(phone);
  if (isValid) {
    const myToken = pushNum();
    pushToken(phone, myToken);
  }
}

createTokenOfPhone("12345678901");
