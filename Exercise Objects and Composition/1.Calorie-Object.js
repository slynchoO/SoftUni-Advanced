function calorieObj(input) {
    let products = {};

    for (let i = 0; i < input.length; i += 2) {
        products[input[i]] = Number(input[i + 1]);

    }

    console.log(products);
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])