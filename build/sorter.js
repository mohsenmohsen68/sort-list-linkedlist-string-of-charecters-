"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    sort() {
        // let inputCollection:number[] = this.collection
        let length = this.collection.length;
        for (let i = 0; i < length; i = i + 1) {
            for (let j = 0; j < length - i - 1; j = j + 1) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
