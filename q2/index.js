let a = [10, 12, 38, 62, 90];
let word = ["ten","Twelve","Thirtyeight","Sixtytwo","Ninety"]
let max = 0;
let index = 0;
for(let i = 0; i < word.length;i++){
    let b = word[i];
    let count = 0;
    for(let j = 0; j<b.length;j++){
        count++
    }
    if(count > max){
        max = count;
        index = i;
    }
}
console.log(a[index])