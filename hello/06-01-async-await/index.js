import axios from "axios";

// 비동기
function fetchPost() {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log(result); // Promise
}

// fetchPost();

// 동기
async function fetchPost2() {
  const result = await axios.get("https://koreanjson.com/posts/1");
  // console.log(result) // 실제데이터
  console.log(result.data); // 실제데이터
}

fetchPost2();
