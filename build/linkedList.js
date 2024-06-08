"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.DataNode = void 0;
const sorter_1 = require("./sorter");
class DataNode {
    constructor(NodeData) {
        this.NodeData = NodeData;
        this.next = null;
    }
}
exports.DataNode = DataNode;
class LinkedList extends sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    get length() {
        let counter = 0;
        if (!this.head) {
            counter = 0;
        }
        else {
            let iterator = this.head;
            while (iterator) {
                iterator = iterator.next;
                counter++;
            }
        }
        return counter;
    }
    addNode(NewNode) {
        if (!this.head) {
            this.head = NewNode;
        }
        else {
            let iterator = this.head;
            while (iterator.next) {
                iterator = iterator.next;
            }
            iterator.next = NewNode;
        }
    }
    atIndex(index) {
        if (!this.head) {
            console.log("out of bound ...");
            return -1;
        }
        else {
            let counter = 0;
            let iterator = this.head;
            while (iterator) {
                if (counter === index) {
                    return iterator.NodeData;
                }
                else {
                    counter++;
                    iterator = iterator.next;
                }
            }
        }
        console.log("out of bound ...");
        return -1;
    }
    print() {
        if (!this.head) {
            console.log("the linked list is empty ...");
        }
        else {
            let iterator = this.head;
            while (iterator) {
                console.log(iterator.NodeData, " ");
                iterator = iterator.next;
            }
        }
    }
    compare(leftIndex, rightIndex) {
        // console.log(this.atIndex(leftIndex),'..',this.atIndex(rightIndex))
        return this.atIndex(leftIndex) > this.atIndex(rightIndex);
    }
    swap(leftIndex, rightIndex) {
        let tempLeft = this.atIndex(leftIndex);
        let tempRight = this.atIndex(rightIndex);
        let iterator = this.head;
        while (iterator) {
            if (iterator.NodeData === tempLeft) {
                iterator.NodeData = tempRight;
            }
            else if (iterator.NodeData === tempRight) {
                iterator.NodeData = tempLeft;
            }
            iterator = iterator.next;
        }
    }
}
exports.LinkedList = LinkedList;
