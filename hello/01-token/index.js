function getToken(count) {
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  if (count >= 11) {
    console.log("너무 많은 자리수입니다.");
  } else if (count <= 4) {
    console.log("너무 적은 자리수입니다.");
  } else {
    console.log(result);
  }

  return result;
}

getToken(7);
getToken(3);
getToken(12);
