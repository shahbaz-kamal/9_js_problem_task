const n = 2;
const arr = [-9000, 9000];

const checkingValidity = () => {
  const condition1 = n >= 1 && n <= 1000;
  const condition3 = arr.length === n;
  const condition2 = arr.every((number) => number >= -10000 && number <= 10000);

  if (condition1 && condition2 && condition3) {
    return true;
  } else return false;
};
const checked = checkingValidity();

const sumElements = () => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
};

if (checked) {
  sumElements();
} else console.log("Condition dosen't match");
