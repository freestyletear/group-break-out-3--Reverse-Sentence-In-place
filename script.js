let reverseSentence = (arr1) => {
  arr1 = arr1.join(",").split(" ").reverse();
  let reversedArray = arr1.join().split(",");
  reversedArray.pop();
  reversedArray.shift();
  return console.log(reversedArray);
};

reverseSentence(["a", "b", "c", " ", "d", "e"]);
reverseSentence(["t", "h", "i", "s", " ", "i", "s", " ", "g", "o", "o", "d"]);
let b = ["i", "s", " ", "t", "h", "i", "s", " ", "g", "o", "o", "d"];
reverseSentence(b);




// or;



var sentence = ["t", "h", "i", "s", " ", "i", "s", " ", "g", "o", "o", "d"];
var reversedS = reverse(sentence).split(",");
function reverse(s) {
  return s.toString().split(" ").reverse().join(" ");
}
reversedS.shift();
reversedS.pop();
console.log(reversedS);



// or


// 

