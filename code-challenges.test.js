// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10];
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36];
// Expected output: [72, 81, 90, 99, 108]

describe("timesThree", () => {
  it("Returns an aray with all the numbers multiplied by 3", () => {
    expect(timesThree(numbersArray1)).toEqual([18, 21, 24, 27, 30]);
    expect(timesThree(numbersArray2)).toEqual([72, 81, 90, 99, 108]);
  });
});

// b) Create the function that makes the test pass.

const timesThree = (array) => {
  return array.map((value) => value * 3);
};

// Pseudo code:

// Declare a function named timesThree
// Input: an array of numbers
// Output: an array of numbers that are three times the numbers from the input
// Use .map to iterate through the array
// Multiply each value by three
// Return an array containing the products of the multiplication

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 };
// Expected output: "15 is divisible by three"
const object2 = { number: 0 };
// Expected output: "0 is divisible by three"
const object3 = { number: -7 };
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
  it("Returns a string stating where a value is divisible by three", () => {
    expect(divisibleByThree(object1)).toEqual("15 is divisible by three");
    expect(divisibleByThree(object2)).toEqual("0 is divisible by three");
    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three");
  });
});

// b) Create the function that makes the test pass.

const divisibleByThree = (object) => {
  if (object.number % 3 === 0) {
    return `${object.number} is divisible by three`;
  } else {
    return `${object.number} is not divisible by three`;
  }
};

// Pseudo code:

// Declare a function named divisibleByThree
// Input: An object
// Output: A string
// Using dot notation, access the value in the object and use modulo to determine if the value is evenly divisible by three
// Return a string containing the value followed by the answer

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalize", () => {
  it("Returns an array of capitalized words", () => {
    expect(capitalize(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(capitalize(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ]);
  });
});

// b) Create the function that makes the test pass.

const capitalize = (array) => {
  return array.map((value) => value.charAt(0).toUpperCase() + value.slice(1));
};

// Pseudo code:

// Declare a function named capitalize
// Input: Array of strings
// Output: Array of strings with first letter capitalized
// Use .map to iterate through the array
// Use .charAt() to grab the first letter of each string
// Use .toUpperCase() to capitalize that letter
// Then add the rest of the string with + and .slice()
// Return the array with the first letter of each string capitalized
