export class Sorter{
    private collection:number[];
    constructor(collection:number[]){
        this.collection = collection;
    }

    public sort(): void{
        let inputCollection:number[] = this.collection
        for(let i=0; i<inputCollection.length;i=i+1){
            for(let j=0; j<inputCollection.length;j=j+1){
                if(inputCollection[i] < inputCollection[j]){
                    let temp = inputCollection[i];
                    inputCollection[i]=inputCollection[j];
                    inputCollection[j]=temp; 
                }
            }
        }
    }
}