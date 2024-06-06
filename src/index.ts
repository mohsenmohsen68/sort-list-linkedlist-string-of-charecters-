import { Sorter } from "./sorter";
import { NumbersArray } from "./numbersArray";
import { CharacterArray } from "./characterArray";


// let array = new Sorter(new NumbersArray([4,9,20,7,14,2,42]))
// array.sort()
// console.log(array);

let charArray = new Sorter(new CharacterArray('xdAzq2wds'))
charArray.sort()
console.log(charArray);