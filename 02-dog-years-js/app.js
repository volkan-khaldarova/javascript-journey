// 1. Create a variable named myAge, and set it equal to your age as a number.
const myAge = 27;

// 2. The first two years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;

// 3. Use the multiplication assignment operator to calculate dog years for the early stage.
earlyYears *= 10.5;

// 4. Since we accounted for the first two years, subtract 2 from myAge.
let laterYears = myAge - 2;

// 5. Multiply the remaining years by 4 to calculate the later dog years.
laterYears *= 4;

// 6. Add earlyYears and laterYears together to get the final result.
const myAgeInDogYears = earlyYears + laterYears; 

// 7. Store the name in lowercase using the built-in string method.
const myName = 'Volkan'.toLowerCase(); 

// 8. Display the final result using string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);