import { Sorter } from "./sorter";

export class CharacterArray extends Sorter{
    constructor(public data:string){
        super()
    }

    get length():number{
        return this.data.length;
    }
    
    compare(leftIndex:number, rightIndex:number):boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    swap(leftIndex:number, rightIndex:number):void{
        let charArray = this.data.split('')
        let temp = charArray[rightIndex];
        charArray[rightIndex] = charArray[leftIndex]
        charArray[leftIndex] = temp

        this.data = charArray.join('');
    }

}