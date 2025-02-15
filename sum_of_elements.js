const n = 5;
const arr = [1, 2, 3, 4];
const sumElements = () => {
  let testArr = [];

  for (let i = 1; i <= n; i++) {
    testArr.push(i);
  }

  const arrEqual = (arr, testArr) =>
    arr.length === testArr.length &&
    arr.every((value, index) => value === testArr[index]);

  const isEqual = arrEqual(arr, testArr);
  if (!isEqual) {
    console.log(0);
    return;
  } else {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    return sum;
  }
};
sumElements();
