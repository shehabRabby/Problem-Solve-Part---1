const numbers = [5,6,11,12,98,5];
const find = 25;

function duplicateElements(arr,num){
   let count = 0;
   for(let i of arr){
    if(arr[i] === num){
        count++;
    }
   }
   console.log(count)
}

duplicateElements(numbers,find);

