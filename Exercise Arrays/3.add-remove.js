function addRemove(input) {
    let result = []

    for(let i = 0; i < input.length; i++) {
        let command = input[i];

        if(command == 'add') {
            result.push(i+1);
        } else {
            result.pop();
        }
    }

    if(result.length == 0) {
        console.log(`Empty`);
    } else {
        console.log(result.join('\n'));
    }
}

addRemove(['add', 
'add', 
'add', 
'add']
);
addRemove(['remove', 
'remove', 
'remove']);