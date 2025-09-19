let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };


let arr = [ pete, john, mary];


function sortByAge(arr) {
    let indexes = arr
  .map((item, index) => ({ index, age: item.age })) // attach index
  .sort((a, b) => a.age - b.age) // sort by age
  .map(obj => obj.index); // extract sorted indexes

    return indexes.map(index => arr[index])
}

console.log(sortByAge(arr))