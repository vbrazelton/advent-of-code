# advent-of-code
A place to put advent of code solutions


### How to use
1) Get your session cookie from adventofcode.com
2) Run `bash init.sh <year> <language> <session cookie>` where
    - `<year>` is the year of the puzzle
    - `<language>` is the day of the puzzle
    - `<session cookie>` is the session cookie you got from adventofcode.com

This will create a couple directories and files:
    - `<language>/<year>/Day_<day>.<language file type>`. For example: `python/2019/Day_1.py` and `node/2019/Day_1.js`
    - `data/<year>/Day_<day>.txt`. For example: `data/2019/Day_1.txt`. It will only create this file if it doesn't already exist.