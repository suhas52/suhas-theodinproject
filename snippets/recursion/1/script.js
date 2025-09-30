function countDown(n) {
    if (n === 0) {
        return "Hooray!";
    }
    else {
        console.log(n)
        return countDown(n - 1);
    }
}

console.log(countDown(10))