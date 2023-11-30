#!/bin/bash

# Check if two arguments are provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <year> <path-to-directory>"
    exit 1
fi

YEAR=$1
LANGUAGE=$2
SESSON=$3

# Create the main directory for the year if it doesn't exist
YEAR_DIR="${LANGUAGE}/${YEAR}"
mkdir -p "${YEAR_DIR}"

# Create data directory if it doesn't exist
DATA_DIR="data/${YEAR}"
mkdir -p "${DATA_DIR}"

# Check if directory creation was successful
if [ $? -ne 0 ]; then
    echo "Failed to create directory: $YEAR_DIR"
    exit 1
fi

# Create 25 subdirectories for each day
for DAY in {1..25}; do   
    if [ ! -d "${YEAR_DIR}/src" ]; then
        mkdir "${YEAR_DIR}/src"
    fi

    if [ ! -d "${YEAR_DIR}/test" ]; then
        mkdir "${YEAR_DIR}/test"
    fi


    # if node create `${DAY}.js` and `${DAY}.test.js`
    if [ -x "$(command -v node)" ]; then
        # Create `${DAY}.js` and `${DAY}.test.js`

        touch "${YEAR_DIR}/src/Day_${DAY}.js"
        touch "${YEAR_DIR}/test/Day_${DAY}.test.js"
    fi

    # if python create `${DAY}.py` and `${DAY}_test.py`
    if [ -x "$(command -v python)" ]; then
        # Create `${DAY}.py` and `${DAY}_test.py`
        touch "${YEAR_DIR}/src/Day_${DAY}.py"
        touch "${YEAR_DIR}/test/Day_${DAY}_test.py"
    fi

    # get data if it doesn't exist
    if [ ! -f "${DATA_DIR}/${DAY}.txt" ]; then
        curl "https://adventofcode.com/${YEAR}/day/${DAY}/input" \
            -H "cookie: session=${SESSON}" \
            -o "${DATA_DIR}/${DAY}.txt"
        
        # wait 1 second to avoid rate limiting
        sleep 1
    else
        echo "Data for day ${DAY} of ${YEAR} already exists."
    fi


done

echo "Directories for Advent of Code ${YEAR} created successfully."
