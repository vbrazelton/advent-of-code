const data = require("fs").readFileSync("../../../data/2023/2.txt", "utf-8");


let possible_games = 0
let game_powers = 0
for (let gameData of data.split("\n")) {
    gameData = gameData.replace("Game ", "");

    const [id, data] = gameData.split(": ");
    max_counts = {};
    for (const selections of data.trim().split("; ")) {
        for (const selection of selections.trim().split(", ")) {
            const [count, color] = selection.split(" ");
            if (max_counts[color] === undefined) {
                max_counts[color] = 0;
            }
            if (max_counts[color] < Number(count)) {
                max_counts[color] = Number(count);
            }
        }
    }

    game_powers += (max_counts["red"] * max_counts["blue"] * max_counts["green"]);
    if (max_counts["red"] > 12 || max_counts["blue"] > 14 || max_counts["green"] > 13) {
        continue;
    }
    

    possible_games += Number(id);
}

console.log("Answer 1:", possible_games);
console.log("Answer 2:", game_powers);
