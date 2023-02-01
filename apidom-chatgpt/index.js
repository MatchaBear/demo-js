const calculateButton = document.querySelector("#calculate-button");
const lengthInput = document.querySelector("#length");
const widthInput = document.querySelector("#width");
const result = document.querySelector("#result");

calculateButton.addEventListener("click", function (event) {
  // callback function ?
  event.preventDefault();
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  result.innerHTML = length * width;
  const addToHistory = document.querySelector(document.createElement("li")); // intention: to write below the submitted (p.id = data-entered)
  addToHistory.append(); // intention: to write below the submitted (p.id = data-entered)
});

document.createTextNode(length); // intention: to write length into the dom
document.createTextNode(width); // intention: to write width into the dom

document.createTextNode(callKontenbase());
// const { user, token, error } = await kontenbase.auth.login({
//   email: "bernhard.hustomo@gmail.com",
//   password: "P@ssw0rd",
// });

function callKontenbase() {
  const url =
    "https://api.kontenbase.com/query/api/v1/57d41d85-788d-4b3d-a289-267f237bf13d";
}

// from chatgpt on how to call api
const callWs = function () {
  // The Endpoint URL
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  fetch(url)
    .then(function (response) {
      // Render the Response Status
      document.getElementById("result").innerHTML = response.status;
      // Parse the body as JSON
      return response.json();
    })
    .then(function (json) {
      // Render the parsed body
      document.getElementById("result_json").innerHTML = JSON.stringify(json);
    });
};

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/calculate-area", (req, res) => {
  const length = parseFloat(req.body.length);
  const width = parseFloat(req.body.width);
  const area = length * width;
  res.json({ area });
});

app.listen(port, () => {
  console.log(
    `Grass Field Area Calculator API is listening at http://localhost:${port}`
  );
});
