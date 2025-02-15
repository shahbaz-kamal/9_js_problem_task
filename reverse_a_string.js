const s = "tamim";
const condition = s.length <= 1000 && s.length >= 1;
const reverseAString = () => {
  const reversedValue = s.split("").reverse().join("");
  console.log(reversedValue);
};

if (condition) {
  reverseAString();
} else {
  console.log("Condition dosent match");
}
