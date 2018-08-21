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

  return sum / numbers.length
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(average([0, -1, 1]));

function repeat(fn, n) {
  for (let i=0; i<n; i++) {
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