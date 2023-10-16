// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

//      ChatGPT - Returned Python
// def find_first_vowel_index(input_string):
//     vowels = "aeiouAEIOU"
//     for index, char in enumerate(input_string):
//         if char in vowels:
//             return index
//     return -1  # Return -1 if no vowel is found in the string
// # Example usage:
// input_string = "Hello, World!"
// index = find_first_vowel_index(input_string)
// if index != -1:
//     print(f"The index of the first vowel in '{input_string}' is: {index}")
// else:
//     print(f"No vowels found in '{input_string}'")



//      Bing Chat (Creative) - Returned Python, then JavaScript, then C++
// # Define a function named find_first_vowel that takes a string as an argument
// def find_first_vowel (s):
//   # Define a set of vowels
//   vowels = set ('aeiouAEIOU')
//   # Loop through the string and check each character
//   for index, char in enumerate (s):
//     # If the character is a vowel, return its index
//     if char in vowels:
//       return index
//   # If no vowel is found, return -1
//   return -1

// # Test the function with some examples
// print (find_first_vowel ('hello')) # Output: 1
// print (find_first_vowel ('sky')) # Output: -1
// print (find_first_vowel ('Apple')) # Output: 0


// Define a function named findFirstVowel that takes a string as an argument
// function findFirstVowel(s) {
//   // Define a string of vowels
//   let vowels = "aeiouAEIOU";
//   // Loop through the string and check each character
//   for (let index = 0; index < s.length; index++) {
//     // If the character is a vowel, return its index
//     if (vowels.includes(s[index])) {
//       return index;
//     }
//   }
//   // If no vowel is found, return -1
//   return -1;
// }
// // Test the function with some examples
// console.log(findFirstVowel("hello")); // Output: 1
// console.log(findFirstVowel("sky")); // Output: -1
// console.log(findFirstVowel("Apple")); // Output: 0


// // Include the iostream library for input and output
// #include <iostream>
// // Include the cstring library for string manipulation functions
// #include <cstring>
// // Use the standard namespace
// using namespace std;
// // Define a function named findFirstVowel that takes a string as an argument and returns an int
// int findFirstVowel (string s) {
//   // Define a string of vowels
//   string vowels = "aeiouAEIOU";
//   // Loop through the string and check each character
//   for (int index = 0; index < s.length (); index++) {
//     // If the character is a vowel, return its index
//     if (vowels.find (s [index]) != string::npos) {
//       return index;
//     }
//   }
//   // If no vowel is found, return -1
//   return -1;
// }
// // Define the main function
// int main () {
//   // Test the function with some examples
//   cout << findFirstVowel ("hello") << endl; // Output: 1
//   cout << findFirstVowel ("sky") << endl; // Output: -1
//   cout << findFirstVowel ("Apple") << endl; // Output: 0
//   // Return 0 to indicate successful execution
//   return 0;
// }



//      Bing Chat (Balanced) - Returned Python
// def first_vowel_index(string):
//     vowels = set('aeiou')
//     for index, letter in enumerate(string):
//         if letter in vowels:
//             return index
//     return -1



//      Bing Chat (Precise) - returned JavaScript
// function findFirstVowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for(let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i].toLowerCase())) {
//             console.log(`The first vowel is at index ${i}`);
//             return;
//         }
//     }
//     console.log("No vowels found in the string");
// }

// Critique the code output.

// This is a very interesting question, because as you see you can get wildly different answers depending on which GPT you ask and how your session is configured. Of the two JavaScript answers that Bing provided the "Precise" setting seems to have provided slightly more robust code but failed to include any code invoking the function to give an output and determine if the code work. Also included is an extra "return" that just returns "undefined" when the function is invoked. The "Creative" Bing instance provided JavaScript as well, which is functional, does include code invoking the function, and is commented to explain what each line of code is doing but in both cases the AI decided to go with loops and conditionals instead of a higher-order-function like .map(), which I would definitely attempt. I would say I've learned not to take code generated by AI at face value and to certainly continue to look for better answers even if the code that was generated does function as intended.

// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn?
