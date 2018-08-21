function max(numbers) {
  let i = 0;
  let maxNumber = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }

    i++;
  }

  return maxNumber;
}

function min(numbers) {
  let i = 0;
  let minNumber = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }

    i++;
  }

  return minNumber;
}

console.log(max([4, 6, 8, 4]));
console.log(min([4, 6, 8, 4]));

function average(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });

  return sum / numbers.length;
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(average([0, -1, 1]));

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(
        `The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`
      );
    }
    if (warningCounter >= 2) {
      console.log(
        `The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`
      );
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const deerWarning = hazardWarningCreator('Deer on the Road');

rocksWarning('Main St and Pacific Ave');
iceWarning('Mill Ave');
deerWarning('Pacific Drive');
rocksWarning('Atlantic Ave');
