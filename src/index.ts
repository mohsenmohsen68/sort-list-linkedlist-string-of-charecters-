import { Sorter } from "./sorter";
import { NumbersArray } from "./numbersArray";


let array = new Sorter(new NumbersArray([4,9,20,7,14,2,42]))
array.sort()
console.log(array);