//@ts-check
import http from "http";

const posts = [
  {
    id: "",
    title: "My firts post",
    content: "hello",
  },
  { id: "my_second_post", title: "My second post" },
];

// const http = require("http");
const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/post$\/[a-zA-z0-9-_]+$/;
  const postidRegexResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined;
  res.statusCode = 200;
  res.end("hello");
  if (req.url === "/post" && req.method === "GET") {
    posts.map(posts => ({
      id: posts.id,
      title: posts.title,
    }));
    console.log("post와GET");
    res.statusCode = 200;
    res.end("list of posts");
  } else if (postidRegexResult) {
    const postid = postidRegexResult[1];
    res.statusCode = 200;
    res.end("posts와이이디");
    console.log(postid);
  } else if (req.url === "/posts/") {
    res.statusCode = 200;
    res.end("posts");
  } else if (req.url === "/posts" && req.method === "POST") {
    res.statusCode = 200;
    res.end("posts와POST");
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

const port = 3000;

server.listen(port, function () {
  console.log("the server is listening at port", port);
});
