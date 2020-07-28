"use strict";

// Declare and initialize the following variables with appropriate values: name (string), age (number), birthday (string), detroitGC (boolean), lifeEvents (array with 4 items - 4 important life events)

let name = "Kristi Wisniowiecki";
let age = 30;
const birthday = "August 12";
let detroitGC = false;
let lifeEvents = ["I was born in Clearwater, Florida.", "I went to Calvin College.", "I earned my blackbelt in Taekwondo in high school.", "I am currently attending a front-end bootcamp."];

// Write an if/else statement that runs one of the two console.log methods. Your console.log methods must incorporate the variables: name, age, and birthday. 

if (detroidGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
    let randomNumber = Math.random(Math.floor * 10 + 1);
    if (randomNumber != 5) {
        counter++;
        console.log(`${randomNumber} !==5`);
    } else {
        counter++;
        console.log(`"5 ==5. It took ${counter} iterations to randomly generate the number 5." `);
        break;
    }
}

// Extended Challege

let hours = 20;
let wage = 10;

if (hours <= 40) {
    let paycheck = hours * wage;
    let weeks = 1000000 / paycheck;
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`);
} else {
    let overtime = (hours - 40) * (wage * 1.5);
    let paycheck = 40 * wage + overtime;
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`);
}