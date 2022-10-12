function createTokenOfPhone(phone, count) {
  if (phone.length !== 11) {
    return console.log("정상적인 숫자를 입력하세요");
  }
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );

  return console.log(result);
}

createTokenOfPhone("01012346789", 6);
createTokenOfPhone("010123467", 6);
