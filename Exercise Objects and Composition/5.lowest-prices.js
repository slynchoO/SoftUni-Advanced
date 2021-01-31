function lowestPRices(input) {
    let products = {};

    for(let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if(!products.hasOwnProperty(product)) {
            products[product] = {
                price,
                town
            };
        } else {
            if(products[product].price > price) {
                products[product].price = price;
                products[product].town = town;
            } else if(products[product].price == price) {
                let old = products[product].price;
                products[product].price = old;
            }
        }   

    }
    let toPrint = Object.entries(products);
    
    for(let x of toPrint) {
        console.log(`${x[0]} -> ${x[1].price} (${x[1].town})`);
    }
}

lowestPRices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);