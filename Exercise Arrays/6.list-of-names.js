function listOfNames(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let num = 1;
    for(let x of sorted) {

        console.log(`${num}.${x}`);
        num += 1;
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])