function rotateArray(input, rotations) {
    let saved
    for(let i = rotations; i > 0; i-- ) {
        saved= input.pop();
        input.unshift(saved);
    }

    console.log(input.join(' '));
}


rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);