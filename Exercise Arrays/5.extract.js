function extract(input) {
    // let result = [];
    // for(let i = 0; i < input.length; i++) {
    //     let num = input[i];

    //     if(num >= result[result.length - 1] || result.length === 0) {
    //         result.push(num);
    //     }
    // }

    // return result;

     return input.reduce(function (result, currentValue, index, initialArr) {
         if(currentValue >= result[result.length-1] || result.length == 0) {
        result.push(currentValue);
        return result;
    }
        return result;
    }, []);
}

console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));