function printEveryNth(input, step) {
    let newArr = [];

    for(let i = 0; i < input.length; i += step) {
        newArr.push(input[i])
    }

    return newArr;
}

console.log(printEveryNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2));