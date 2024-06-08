import { Sorter } from "./sorter";
export class DataNode  {
  public next: null | DataNode = null;
  constructor(public NodeData: number) {
  }
}

export class LinkedList extends Sorter {
  public head: DataNode | null = null;
  constructor() {
    super()
  }

  get length(): number {
    let counter: number = 0;
    if (!this.head) {
      counter = 0;
    } else {
      let iterator: DataNode | null = this.head;
      while (iterator) {
        iterator = iterator.next;
        counter++;
      }
    }
    return counter;
  }
  addNode(NewNode: DataNode): void {
    if (!this.head) {
      this.head = NewNode;
    } else {
      let iterator: DataNode | null = this.head;
      while (iterator.next) {
        iterator = iterator.next;
      }
      iterator.next = NewNode;
    }
  }

  atIndex(index: number): number {
    if (!this.head) {
      console.log("out of bound ...");
      return -1;
    } else {
      let counter = 0;
      let iterator: null | DataNode = this.head;
      while (iterator) {
        if (counter === index) {
          return iterator.NodeData;
        } else {
          counter++;
          iterator = iterator.next;
        }
      }
    }
    console.log("out of bound ...");
    return -1;
  }

  print(): void {
    if (!this.head) {
      console.log("the linked list is empty ...");
    } else {
      let iterator: DataNode | null = this.head;
      while (iterator) {
        console.log(iterator.NodeData, " ");
        iterator = iterator.next;
      }
    }
  }
  compare(leftIndex: number, rightIndex: number): boolean {
   // console.log(this.atIndex(leftIndex),'..',this.atIndex(rightIndex))
    return this.atIndex(leftIndex) > this.atIndex(rightIndex);
  }

  swap(leftIndex: number, rightIndex: number): void {
    let tempLeft = this.atIndex(leftIndex);
    let tempRight = this.atIndex(rightIndex);
    
    let iterator: null | DataNode = this.head;
    while (iterator) {
      if (iterator.NodeData === tempLeft) {
        iterator.NodeData = tempRight;
      }else if (iterator.NodeData === tempRight) {
        iterator.NodeData = tempLeft; 
      }
      iterator = iterator.next;
     }
    
    
  }
}
