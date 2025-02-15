const n = 4;
const arr = [-1,-2,-3,-4];

const checkingValidity = () => {
  const condition1 = n >= 1 && n <= 1000;
  const condition3 = arr.length === n;
  const condition2 = arr.every((number) => number >= -10000 && number <= 10000);

  if (condition1 && condition2 && condition3) {
    return true;
  } else return false;
};
const checked = checkingValidity();

const findingTheMaximum = () => {
  const max = Math.max(...arr);
  console.log(max);
};
if (checked) {
  findingTheMaximum();
} else {
  console.log("Condition dosent match");
}
