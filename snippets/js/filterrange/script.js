const arr = [1, 2, 3, 4, 5]

function filterRange(array, a, b) {
    return array.filter((num) => num >= a && num <= b)
}

console.log(filterRange(arr, 2, 4));