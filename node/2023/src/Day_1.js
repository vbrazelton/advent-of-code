const data = require("fs").readFileSync("../../../data/2023/1.txt", "utf8");

// Part 1
let total = 0;
for (const line of data.split("\n")) {
  let first;
  let last;
  for (const char of line) {
    if (isNaN(char)) {
      continue;
    }
    if (first === undefined) {
      first = char;
    }
    last = char;
  }
  if (first && last) {
    total += Number(`${first}${last}`);
  }
}
console.log(`Answer 1: ${total}`);
// 54388 is correct

// Part 2
const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

total = 0;

// TODO - So you are replacing numbers, we actually can't do that. We just need to see that a word is a number and add that as the first / last
for (let line of data.split("\n")) {
  let first;
  let last;
  for (const char in line) {
    if (isNaN(line[char])) {
      let currSlice = line.slice(char, line.length);

      for (number in numbers) {
        if (numbers[number].length > currSlice.length) {
          continue;
        }

        if (currSlice.startsWith(numbers[number])) {
          if (first === undefined) {
            first = Number(number) + 1;
          }
          last = Number(number) + 1;
        }
      }
    } else {
      if (first === undefined) {
        first = line[char];
      }
      last = line[char];
    }
  }
  if (first && last) {
    // console.log(
    //   `Current: ${line} | First: ${first} | Last ${last} | Digit: ${first}${last}`
    // );
    total += Number(`${first}${last}`);
  }
}
console.log(`Answer 2: ${total}`);
// 53515 is correct
