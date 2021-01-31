function storeCatalogue(input) {
    let catalogue = {};

    for(let line of input) {
        let [name, price] = line.split(' : ');
        price = Number(price);

        let letterF = name[0];

        if(!catalogue[letterF]) {
            catalogue[letterF] = [];
        } 

        catalogue[letterF].push({name, price: price});
        catalogue[letterF].sort((a, b) => (a.name).localeCompare(b.name));
    }

    let result = [];
    
    Object.entries(catalogue).sort((a, b) =>a[0].localeCompare(b[0]))
    .forEach(entry => {
        let values = entry[1]
        .sort((a, b) => (a.name).localeCompare(b.name)) //{name, price}
        .map(product => `   ${product.name}: ${product.price}`) // name: price
        .join('\n');

        let string = `${entry[0]}\n${values}`;
        result.push(string)
    });
    
    console.log(result.join('\n'));
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);