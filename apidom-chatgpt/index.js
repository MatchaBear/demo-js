const calculateButton = document.querySelector("#calculate-button");
const lengthInput = document.querySelector("#length");
const widthInput = document.querySelector("#width");
const result = document.querySelector("#result");

calculateButton.addEventListener("click", function (event) {
  event.preventDefault();
  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  result.innerHTML = length * width;
});

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
