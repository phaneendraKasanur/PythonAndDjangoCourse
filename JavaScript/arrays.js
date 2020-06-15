var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
console.log(array.sort());

array.push("Kiwi");
console.log(array.sort());

array.shift();

console.log(array.sort());

console.log(array.reverse());

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0])