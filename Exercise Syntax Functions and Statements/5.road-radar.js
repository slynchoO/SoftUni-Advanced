function roadRadar(speed, area) {
    let speedLimit = 0;
    let status = '';
    let overlimit = 0;
    //On the motorway the limit is 130 km/h
    // On the interstate the limit is 90 km/h
    // In the city the limit is 50 km/h 
    // Within a residential area the limit is 20 km/h

    if (overlimit <= 20) {
        status = 'speeding';
    } else if (overlimit >= 20 && overlimit <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }


    if (area == 'motorway') {
        speedLimit = 130;
        overlimit = speed - speedLimit;

        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            if (overlimit <= 20) {
                status = 'speeding';
            } else if (overlimit >= 20 && overlimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overlimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    } else if (area == 'interstate') {
        speedLimit = 90;
        overlimit = speed - speedLimit;

        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            if (overlimit <= 20) {
                status = 'speeding';
            } else if (overlimit >= 20 && overlimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overlimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    } else if (area == 'city') {
        speedLimit = 50;
        overlimit = speed - speedLimit;

        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            if (overlimit <= 20) {
                status = 'speeding';
            } else if (overlimit >= 20 && overlimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overlimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    } else if (area == 'residential') {
        speedLimit = 20;
        overlimit = speed - speedLimit;

        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            if (overlimit <= 20) {
                status = 'speeding';
            } else if (overlimit >= 20 && overlimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overlimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

}

roadRadar(200, 'motorway');