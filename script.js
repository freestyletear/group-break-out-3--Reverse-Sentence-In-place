let reverseSentence = (arr1) => {
  arr1 = arr1.join(",").split(" ").reverse();
  let reversedArray = arr1.join().split(",");
  reversedArray.pop();
  reversedArray.shift();
  return console.log(reversedArray);
};

reverseSentence(["a", "b", "c", " ", "d", "e"]);
reverseSentence(["t", "h", "i", "s", " ", "i", "s", " ", "g", "o", "o", "d"]);
b = ["i", "s", " ", "t", "h", "i", "s", " ", "g", "o", "o", "d"];
reverseSentence(b);

// const A = ['this', 'is', 'good'];
// console.log("A:", A);
// // expected output: "A:" Array ['this', 'is', 'good']

// const reversed = A.reverse();
// console.log("reversed:", reversed);
// // expected output: "reversed:" Array ['this', 'is', 'good']

// // Careful: reverse is destructive -- it changes the original array.
// console.log("A:", A);
// // expected output: "A:" Array ['good', 'is', 'this']
