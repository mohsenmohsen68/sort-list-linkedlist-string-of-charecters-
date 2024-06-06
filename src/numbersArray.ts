export class NumbersArray {
    public Numbers:number[];
    constructor(Numbers:number[]){
        this.Numbers = Numbers;
    }

    get length(){
        return this.Numbers.length
    }

    compare(leftIndex:number, rightIndex:number):boolean{
       return this.Numbers[leftIndex] > this.Numbers[rightIndex]
    }

    swap(leftIndex:number, rightIndex:number):void{
        let temp = this.Numbers[rightIndex];
        this.Numbers[rightIndex] = this.Numbers[leftIndex]
        this.Numbers[leftIndex] = temp
    }
}