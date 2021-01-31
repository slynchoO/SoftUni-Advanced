function townsToJSON(input) {
    let info = input.shift();

    let table = {};

    for(let line of input) {
        
        let [town, latitude, longitude] = line.split(' | ');
        
        latitude = Number(latitude).toFixed(2);
        longitude = longitude.split('| ');
        longitude = Number(longitude).toFixed(2);
        console.log(longitude);
        if(!table[town]) {
            table[town] = {latitude, longitude};
        }
    }

    console.log(table);


}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])