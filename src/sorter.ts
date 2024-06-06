import { NumbersArray } from "./numbersArray";

export class Sorter{
    
    constructor(public collection: NumbersArray){
        this.collection = collection;
    }

    public sort(): void{
        // let inputCollection:number[] = this.collection
        let length = this.collection.length;
        for(let i=0; i<length;i=i+1){
            for(let j=0; j<length - i - 1;j=j+1){
                if(this.collection.compare(j,j+1)){
                    this.collection.swap(j,j+1)
                }
            }
        }
    }
}