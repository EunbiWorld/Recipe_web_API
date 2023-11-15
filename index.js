const express = require("express");
const app = express();

const recipe_api = require("./recipe_API_JSON.json");

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  // 서버가 정상적으로 작동하는 것을 콘솔에 출력합니다.
  console.log("Server is working : PORT - ", port);
});

// 루트('/') 경로에 대한 GET 요청을 처리하는 라우트를 정의
// 이 경로로 요청이 오면 'Hello World!' 메시지를 반환
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// '/api/recipe' 경로에 대한 GET 요청을 처리하는 라우트를 정의
// 이 경로로 요청이 오면 'recipe_API_JSON.json' 파일의 내용을 JSON 형식으로 반환
app.get("/api/recipe", (req, res) => {
  res.json(recipe_api);
});