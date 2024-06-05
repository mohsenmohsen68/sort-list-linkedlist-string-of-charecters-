"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        let inputCollection = this.collection;
        for (let i = 0; i < inputCollection.length; i = i + 1) {
            for (let j = 0; j < inputCollection.length; j = j + 1) {
                if (inputCollection[i] < inputCollection[j]) {
                    let temp = inputCollection[i];
                    inputCollection[i] = inputCollection[j];
                    inputCollection[j] = temp;
                }
            }
        }
    }
}
exports.Sorter = Sorter;
