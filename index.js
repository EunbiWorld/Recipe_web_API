const express = require("express");
const app = express();

const recipe_api = require("./recipe_API_JSON.json");

// Fisher-Yates 알고리즘을 사용하여 배열을 무작위로 섞음
function shuffleRecipes() {
  for (let i = recipe_api.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [recipe_api[i], recipe_api[j]] = [recipe_api[j], recipe_api[i]];
  }
}

// 서버가 시작될 때마다 레시피 데이터를 무작위로 섞음
shuffleRecipes();

// 24시간마다 레시피 데이터를 무작위로 섞음
setInterval(shuffleRecipes, 24 * 60 * 60 * 1000);

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

// 무작위로 선택된 4개의 레시피만 반환하는 API
app.get("/api/recommendation", (req, res) => {
  res.json(recipe_api.Food['Food recipe'].slice(0, 4));
});
