const data = require("fs").readFileSync("Day_1.txt", "utf-8")

let lst = [];
const elfs = data.split("\n\n");
for (const elf in elfs) {
  let total = 0;
  for (const item of elfs[elf].split("\n")) {
    total += Number(item);
  }
  
  lst.push({ elf: elf, total: total });


}

lst = lst.sort((a, b) => {
    return b.total - a.total;
});

const top3Sum = lst.slice(0,3).reduce((a, b) => {
    return a += b.total;
},0)

console.log("Answer 1:", lst[0]);
console.log("Answer 2:",top3Sum);
