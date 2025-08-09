const str = 'String is Here';

function checkVowels(str){
 let count = 0;
 let copyStr = str.toLowerCase();
 for(let i of copyStr){
   if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
    count++;
   }
 }
 console.log('Total Vowel in this String : '+count)
}

checkVowels(str);