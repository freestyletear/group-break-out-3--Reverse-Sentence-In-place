const A = ["this", "is", "good"];
console.log("A:", A);
// expected output: "A:" Array ["this", "is", "good"]

const reversed = A.reverse();
console.log("reversed:", reversed);
// expected output: "reversed:" Array ["this", "is", "good"]

// Careful: reverse is destructive -- it changes the original array.
console.log("A:", A);
// expected output: "A:" Array ["this", "is", "good"]
