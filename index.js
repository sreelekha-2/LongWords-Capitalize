//1.longest word

const sentence = 'I woke up early today morning';
// const sentence = 'I went straight to the beach';
const arr = sentence.split(' ');

const max = arr.reduce((longWord, curr) => {
  if (curr.length > longWord.length) {
    return curr;
  } else {
    return longWord;
  }
});

const longArr = arr.filter((word) => word.length === max.length);
console.log(longArr);

//2.capitalize

const newArr = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
console.log(newArr.join(' '));
