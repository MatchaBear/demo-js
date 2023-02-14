const calculateForm = document.querySelector("#calculate-form");
const lengthInput = document.querySelector("#length");
const widthInput = document.querySelector("#width");

const resultLength = document.querySelector("#result-length");
const resultWidth = document.querySelector("#result-width");
const resultArea = document.querySelector("#result-area");

const historyList = document.querySelector("#history-list");

calculateForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);
  const area = length * width;

  resultLength.innerHTML = length;
  resultWidth.innerHTML = width;
  resultArea.innerHTML = area;

  const historyItemElement = document.createElement("li");

  historyList.append(historyItemElement);

  historyItemElement.innerHTML = "Area = " + area;
});
