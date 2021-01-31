function fruit(fruit, grams, priceKG) {
    let toKG = grams * 0.001;
    let total = (grams * priceKG)/1000;
    console.log(`I need $${total.toFixed(2)} to buy ${toKG.toFixed(2)} kilograms ${fruit}.`);
}

fruit('apple', 1563, 2.35);