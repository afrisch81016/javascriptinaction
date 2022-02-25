let dayOfWeek = "Monday";
console.log(dayOfWeek);

let dayOfWeek1 = "Friday";
console.log(dayOfWeek1 + " I can't wait for Friday!");

let animalInput = prompt("What is your favorite animal?");
let colorInput = prompt("What is your favorite color?");

let responseofquestion = "I've never seen a " + colorInput + " " + animalInput + "!";

console.log(responseofquestion)

// #favorite breakfast is chicken and waffle#
// #favorite lunch is Jimmy Johns#
// #favorite dinner is Texas Roadhouse#


let mealofchoicebreakfast = "Chicken and Waffles"
let mealofchoicelunch = "Jimmy Johns"
let mealofchoicedinner = "Teaxs Roadhouse"

let userinputtime = prompt("What time of the day is it in military time? This will decide your choice of food to eat!");
let timeOfDay = userinputtime

if (timeOfDay <1200) {
console.log (mealofchoicebreakfast)
}
else if (timeOfDay => 1200 || timeOfDay <=1700){
console.log (mealofchoicelunch)

} else if (timeOfDay =>1700){
console.log (mealofchoicedinner)
}


const numbergenerated = Math.random() * (10-1) + 1
console.log (numbergenerated)

if (numbergenerated >0 || numbergenerated <2) {
    console.log ("Beatles")
}
else if (numbergenerated >3 || numbergenerated <5) {
console.log("Stones")
}
else if (numbergenerated >6|| numbergenerated <8) {
    console.log("Floyd")
}
else if (numbergenerated = 9||10){
    console.log("Hendrix")
}
