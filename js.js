

//create a palindrome checking function
/*
let words = ['dog', 'rat', 'racecar']
let paliArray = []

const checkPali = str => {
    let reversed = str.split('').reverse().join('');
    if (reversed === str) {
        paliArray.push(str);
        return true;
    }
    else {
        return false;
    }

} 
checkPali('wow')
checkPali('racecar')
checkPali('dog')

console.log(paliArray)


// create a function to count to number, without odd integers

let numbers = []

const countUp = (num) => {
    for (i = 0; i <= num; i++) {
        if (i % 2 === 0) {
        numbers.push(i)
        }
    }
}

countUp(6)

console.log(numbers)


let firstName = '';
let lastName = '';

const requestName = (firstName, lastName) => {
    console.log(firstName + ' ' + lastName);
}

requestName('will', 'newton')

const homeTeam = {
    _city: 'Dallas',
    _state: 'Texas',
    _logo: 'Stars'
}

console.log(homeTeam._city + ' ' + homeTeam._logo)


const findAge = num => {
    console.log(2022-num)
}

findAge(1993)
*/ 

/* Write a loop that makes seven calls to console.log to 
output the following triangle:

#
##
###
####
#####
######
#######

*/
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

/* */


/* FIZZBUZZ 
    logs 1-100 in console
    if num is divis by 3, log 'Fizz'
    if num is divis by 5, log 'Buzz'
    if num is divis by 3 && 5, log 'FizzBuzz
*/

const fizzBuzz = () => {
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        }
        else if (i % 3 == 0) {
            console.log('Fizz')
        }
        else if (i % 5 == 0) {
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz()

/* CHESSBOARD to console

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

*/

let size = 8;

let board = "";

for (let i = 0; i < size; i++) {
  for (let x = 0; x < size; x++) {
    if ((x + i) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

/* RETURN MIN

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

*/

const returnMin = (num1, num2) => {
    if (num1 == num2) {console.log('same number')}
    else if (num1 > num2) {console.log(num2)}
    else {console.log(num1)}   
}

returnMin(2,4); // prints 2
returnMin(2,1); // prints 1
returnMin(2,2); // prints 'same number'

/* RETURN BOOL for isEven()
console.log(isEven(75));
// → false
*/

const isEven = (num) => {
    if (num <= 1) {console.log('let\'s stick to positive integers!')}
    else if (num % 2 == 0) {
        console.log('is even') 
    }
    else {
        console.log('is odd')
    }
}

isEven(4)
isEven(5)
isEven(1) // Let's stick to positive integers!


/* Bean counting 

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

*/ 

const countBs = String => {
    let numOfBs = 0;

    for (let i = 0; i <= String.length; i++) {
        if (String[i] == 'B') {
            numOfBs += 1;
        }
    }   
    console.log(numOfBs)
}

countBs('Baby')

const charCount = (String1, String2) => {
    let counter = 0;

    for (let i = 0; i <= String1.length; i++) {
        if (String1[i] == String2) {
            counter += 1;
        }
    }
    console.log(counter)
}

charCount('doggo', 'o')


//console.log(listRange(1, 9));

const listRange = (start, end, step) => {
    let rangeArray = [];

    if (step && start < end)  {
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i)
        }            
    }
    console.log(rangeArray)
}

console.log(listRange(1,9,2))


//console.log(sumRange(1,9))

const sumRange = (num1, num2) => {
    let sumRangeVal = 0;

    for (let i = num1; i <= num2; i++) {
    sumRangeVal += i;        
    }            
    console.log(sumRangeVal)
}

sumRange(1,10)



