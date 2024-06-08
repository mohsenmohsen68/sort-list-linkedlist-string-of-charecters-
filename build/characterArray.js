"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterArray = void 0;
const sorter_1 = require("./sorter");
class CharacterArray extends sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        let charArray = this.data.split('');
        let temp = charArray[rightIndex];
        charArray[rightIndex] = charArray[leftIndex];
        charArray[leftIndex] = temp;
        this.data = charArray.join('');
    }
}
exports.CharacterArray = CharacterArray;
