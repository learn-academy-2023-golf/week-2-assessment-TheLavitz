// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023";
// console.log(cohort.split(" "))

// a) Your answer: ["Golf", "2023"]
// b) Verify and explain: My answer was correct. The .split() built-in-method takes the (" ") seperator and starts a new string every time it hits " " and then outputs those strings in an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`;
};
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: I was incorrect. Because greeter is a function it requires a return to perform an action.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0);
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The variable 'onlyOdds' is being set with an array of numbers, but that array is simulataneous being filtered by .filter() and, through the iteration of filter each value in the array is being ran through modulo 2 and if it doesn't equal 0 then the value is being included in the output of .filter() which is ultimately what 'onlyOdds' contains.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
};
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The console.log is calling index 0 of key: languages from object: myCodingSkills, which, because the key: languages contains an array and arrays are 0 indexed, means the value of the first element is what will be output.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name;
    this.cohort = "Golf";
    this.year = 2023;
  }
}
const learnStudent = new Learn("George");
// console.log(learnStudent)

// a) Your answer: { this.student = "George", this.cohort = "Golf", this.year = 2023 }
// b) Verify and explain: This will output the entire object because the console.log isn't specifying any specific key:value pairs. The object contains "Geroge" in the student key because when the class was instatiated and the "learnStudent" object was created it was passed "George" as the value for the student key.