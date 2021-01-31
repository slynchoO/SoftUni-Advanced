function sortingNums(input) {
    input.sort((a, b) => a - b);
    let result = [];
    while(input.length) {
        result.push(input.shift());
        result.push(input.pop());
    }
    return result.filter(num => num != undefined);
}

console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));