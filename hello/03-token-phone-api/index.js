function LenCheck(phone) {
  if (phone.length !== 11) {
    return console.log("정상적인 숫자를 입력하세요");
  } else if (phone === undefined) {
    return console.log("정상적인 숫자를 입력하세요");
  }
  return true;
}

function pushNum() {
  const result = String(Math.floor(Math.random() * 10 ** 6)).padStart(6, "0");
  return result;
}

function pushToken(myphone, tokens) {
  return console.log(`${myphone}으로 ${tokens}를 발송합니다`);
}

function createTokenOfPhone(phone) {
  const isValid = LenCheck(phone);
  if (isValid) {
    const myToken = pushNum();
    pushToken(phone, myToken);
  }
}

createTokenOfPhone("12345678901");
