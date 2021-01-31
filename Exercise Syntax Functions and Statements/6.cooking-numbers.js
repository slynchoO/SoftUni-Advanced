function cookingNumbers(start, oper1, oper2, oper3, oper4, oper5) {
    let newStart = Number(start);
    let operations = [oper1, oper2, oper3, oper4, oper5];

    for(let i = 0; i < operations.length; i++) {
        let x = operations[i];
        
        switch(x) {
            case 'chop':
                newStart /= 2;
                
            break;
            case 'dice':
                newStart = Math.sqrt(newStart);
            break;
            case 'spice':
                newStart += 1;
            break;
            case 'bake':
                newStart *= 3;
            break;
            case 'fillet':
                let x = newStart * 0.2;
                newStart -= x;
            break;
        }

        console.log(newStart);
    }



}

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');