import { Sorter } from "./sorter";
import { NumbersArray } from "./numbersArray";
import { CharacterArray } from "./characterArray";
import { LinkedList } from "./linkedList";
import { DataNode } from "./linkedList";


// let array = new Sorter(new NumbersArray([4,9,20,7,14,2,42]))
// array.sort()
// console.log(array);

// let charArray = new Sorter(new CharacterArray('xdAzq2wds'))
// charArray.sort()
// console.log(charArray);

let myLinkedList = new LinkedList()
myLinkedList.addNode(new DataNode(4))
myLinkedList.addNode(new DataNode(24))
myLinkedList.addNode(new DataNode(2))
myLinkedList.addNode(new DataNode(29))
myLinkedList.addNode(new DataNode(204))
myLinkedList.addNode(new DataNode(20))
myLinkedList.addNode(new DataNode(9))
console.log("unsorted linked list ...")
myLinkedList.print()

let linkedListArray = new Sorter(myLinkedList)
linkedListArray.sort(),
console.log('sorted linked list : ');
myLinkedList.print()