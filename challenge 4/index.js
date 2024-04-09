// scripts.js


const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}

// Only edit below
// Extracting arrays from data.lists
const first = data.lists[0][1]; // Extracting the array from the first sublist
const second = data.lists[1][1]; // Extracting the array from the second sublist
const third = data.lists[2][1]; // Extracting the array from the third sublist

const result = []

// Function to extract the largest element from the arrays
const extractBiggest = () => {
    // Check if the last element of the 'first' array is greater than the last element of the 'second' array
    if (first.slice(-1)[0] > second.slice(-1)[0]) {
        // If true, remove and return the last element of the 'first' array
        return first.pop();

    }

    // Check if the last element of the 'second' array is greater than 1
    else if (second.slice(-1)[0] > 1) {
        // If true, remove and return the last element of the 'second' array
        return second.pop();
    }
    // If the above conditions are not met, return and remove the last element of the 'third' array
    else{
        return third.pop();
    }


}


result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result);