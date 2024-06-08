"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const linkedList_1 = require("./linkedList");
const linkedList_2 = require("./linkedList");
// let array = new Sorter(new NumbersArray([4,9,20,7,14,2,42]))
// array.sort()
// console.log(array);
// let charArray = new Sorter(new CharacterArray('xdAzq2wds'))
// charArray.sort()
// console.log(charArray);
let myLinkedList = new linkedList_1.LinkedList();
myLinkedList.addNode(new linkedList_2.DataNode(4));
myLinkedList.addNode(new linkedList_2.DataNode(24));
myLinkedList.addNode(new linkedList_2.DataNode(2));
myLinkedList.addNode(new linkedList_2.DataNode(29));
myLinkedList.addNode(new linkedList_2.DataNode(204));
myLinkedList.addNode(new linkedList_2.DataNode(20));
myLinkedList.addNode(new linkedList_2.DataNode(9));
console.log("unsorted linked list ...");
myLinkedList.print();
let linkedListArray = new sorter_1.Sorter(myLinkedList);
linkedListArray.sort(),
    console.log('sorted linked list : ');
myLinkedList.print();
