function heroes(input) {
    let result = [];

    for(let line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);

        if(items.length > 0) {
            items = items.split(', ');
        } else {
            items = [];
        }

        result.push({name, level, items});
        
    }

    console.log(JSON.stringify(result));
}

heroes(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);