function Fibonacci(n1, n2, count){
    let fibonacciArr = [n1, n2]

    for (let i = 2; i < count; i++){
        let nextNum = n1 + n2;
        fibonacciArr.push(nextNum);
        n1 = n2;
        n2 = nextNum;
    }

    return fibonacciArr;
}

console.log(Fibonacci(0, 1, 20))