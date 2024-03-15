"use strict";
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var favouriteNumber = parseInt(readlineSync.question('enter your favourite number:'));
var favouriteMessage = 'My favourite Number is: ' + favouriteNumber;
console.log(favouriteMessage);
