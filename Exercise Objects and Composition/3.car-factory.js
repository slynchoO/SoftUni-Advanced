function carFactory(order) {
    let shop = {
        SmallEngine: {
            power: 90,
            volume: 1800
        },
        NormalEngine: {
            power: 120,
            volume: 2400
        },
        MonsterEngine: {
            power: 200,
            volume: 3500
        },
        Hatchback: {
            type: 'hatchback',
            color: ''
        },
        Coupe: {
            type: 'coupe',
            color: ''
        },

    };

    let wheel = 0;

    if(order.wheelsize % 2 == 0) {
        wheel = order.wheelsize - 1;
    } else {
        wheel = order.wheelsize;
    }

    let car = {
        model: order.model,
        engine: {},
        carriage: {},
        wheels: [wheel, wheel, wheel, wheel]
    };

    if(order.power <= shop.SmallEngine.power) {
        car.engine.power = shop.SmallEngine.power;
        car.engine.volume = shop.SmallEngine.volume;
    } else if(order.power <= shop.NormalEngine.power) {
        car.engine.power = shop.NormalEngine.power;
        car.engine.volume = shop.NormalEngine.volume;
    } else if(order.power <= shop.MonsterEngine.power) {
        car.engine.power = shop.MonsterEngine.power;
        car.engine.volume = shop.MonsterEngine.volume;
    }

    if(order.carriage == 'hatchback') {
        car.carriage.type = 'hatchback';
        car.carriage.color = order.color;
    } else if(order.carriage == 'coupe') {
        car.carriage.type = 'coupe';
        car.carriage.color = order.color;
    }

    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));