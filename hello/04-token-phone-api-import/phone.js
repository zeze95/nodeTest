export function LenCheck(phone) {
  if (phone.length !== 11) {
    return console.log("정상적인 숫자를 입력하세요");
  } else if (phone === undefined) {
    return console.log("정상적인 숫자를 입력하세요");
  }
  return true;
}

export function pushNum() {
  const result = String(Math.floor(Math.random() * 10 ** 6)).padStart(6, "0");
  return result;
}

export function pushToken(myphone, tokens) {
  return console.log(`${myphone}으로 ${tokens}를 발송합니다`);
}
