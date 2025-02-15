const n = 3;
const arr = ["name1 10", "name2 20", "name3 30"];
const lookupKey = "name2";

const keyValuePair = () => {
  const matches = arr.filter((key) => key.includes(lookupKey));

  if (matches.length === 0) {
    console.log("Not Found");
  } else {
    const output = matches[0].split(" ");
    console.log(output[1]);
  }
};
keyValuePair();
