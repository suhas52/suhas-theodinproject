let arr = [0, 1];
function fibonacci(n, arr) {
    if (n === 2) {
        return
    }
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    fibonacci(n - 1, arr)
}

fibonacci(20, arr);
console.log(arr)

