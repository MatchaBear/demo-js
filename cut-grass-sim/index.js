const grassHeight = prompt(
  "How tall (in centimeter) is your grass height right now?"
);

const scissors = [{ size: "small" }, { size: "medium" }, { size: "large" }];

if (grassHeight > 0 && grassHeight <= 10) {
  scissor = scissors[0].size;
  console.log(`You can cut the grass with ${scissor} scissor`);
} else if (grassHeight > 0 && grassHeight <= 50) {
  scissor = scissors[1].size;
  console.log(`You can cut the grass with ${scissor} scissor`);
} else if (grassHeight > 0 && grassHeight <= 100) {
  scissor = scissors[2].size;
  console.log(`You can cut the grass with ${scissor} scissor`);
} else if (grassHeight > 100) {
  console.log(`Grass height is too long!`);
} else {
  console.log(`Grass height is either too short or has not grown at all!`);
}
