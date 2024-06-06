"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const characterArray_1 = require("./characterArray");
// let array = new Sorter(new NumbersArray([4,9,20,7,14,2,42]))
// array.sort()
// console.log(array);
let charArray = new sorter_1.Sorter(new characterArray_1.CharacterArray('xdAzq2wds'));
charArray.sort();
console.log(charArray);
