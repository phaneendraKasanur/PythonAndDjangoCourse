var firstName = prompt("what is your first name ?")
var secondName = prompt("what is your last name ?")
var age = prompt("what is your age")
var height = prompt("what is your height in cms")
var petName = prompt("what is your pet name ")
var sum = 0;

if (firstName[0] === secondName[0]) {
    sum = sum + 1;
}
if (age > 20 && age < 30) {
    sum = sum + 1;
}
if (height >= 170) {
    sum = sum + 1;
}

if (petName[petName.length - 1]) {
    sum = sum + 1;
}
if (sum === 4) {
    console.log("you are a spy");
    alert("look at your console")
} else {
    alert("good to know")
}