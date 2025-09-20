const arr = [5, 3, 8, 1];

function filterRangeInPlace(array, a, b) {
    array = array.filter((num) => num >= a && num <= b);
}

filterRangeInPlace(arr, 1, 4)
console.log(arr)

