"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersArray = void 0;
class NumbersArray {
    constructor(Numbers) {
        this.Numbers = Numbers;
    }
    get length() {
        return this.Numbers.length;
    }
    compare(leftIndex, rightIndex) {
        return this.Numbers[leftIndex] > this.Numbers[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        let temp = this.Numbers[rightIndex];
        this.Numbers[rightIndex] = this.Numbers[leftIndex];
        this.Numbers[leftIndex] = temp;
    }
}
exports.NumbersArray = NumbersArray;
