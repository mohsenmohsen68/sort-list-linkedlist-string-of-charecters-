"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const numbersArray_1 = require("./numbersArray");
let array = new sorter_1.Sorter(new numbersArray_1.NumbersArray([4, 9, 20, 7, 14, 2, 42]));
array.sort();
console.log(array);
