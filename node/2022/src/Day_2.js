
let data = require("fs").readFileSync("../../../data/2022/2.txt", "utf-8");

const replacements = {
    "A": "1",
    "B": "2",
    "C": "3",
    "X": "1",
    "Y": "2",
    "Z": "3"
}

for (const item of data.split("\n")) {
    if (item === "") {
        continue;
    }   

    const moves = item.split(" ").map((move) => {
        return replacements[move];
    });
    console.log(moves);


}

