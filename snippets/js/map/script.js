const arr = [1, 2, 3, 4, 5];

let addedArr = arr.map((num) => num + 1);
let evenArr = arr.filter((num) => num % 2 === 0);
let prodArr = arr.reduce((total, currentItem) => {
    return total * currentItem;
})

console.log(addedArr);
console.log(evenArr);
console.log(prodArr)
