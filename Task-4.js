const str = 'I am learning Programming to become  a programmer';

function largeWord(str){
    const newStr = str.split(' ');
    let large = '';

    for(let i of newStr){
        if(i.length > large.length){
            large = i;
        }
    }
     return large;
}

const result = largeWord(str);
console.log(result);