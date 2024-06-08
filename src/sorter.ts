export abstract class Sorter{

    abstract length:number;
    abstract compare(leftIndex: number, rightIndex:number):boolean
    abstract swap(leftIndex: number, rightIndex:number):void

    public sort(): void{
        // let inputCollection:number[] = this.collection
        let length = this.length;
        
        
        for(let i=0; i<length;i=i+1){
            for(let j=0; j<length - i - 1;j=j+1){
                if(this.compare(j,j+1)){
                    this.swap(j,j+1)
                }
            }
        }
    }
}