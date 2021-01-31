function timeToWalk(steps, footprintMeter, kmPerHour) {
    //Every 500 meters the student rests and takes a 1 minute break.
    
    let distanceMeters = steps * footprintMeter;
    let speedInSecs = kmPerHour / 3.6;
    let time = distanceMeters / speedInSecs;

    let rest = Math.floor(distanceMeters / 500);

    let min = Math.floor(time/60);
    let sec = Math.round(time - (min * 60));
    let hour = Math.floor(time / 3600);

    console.log((hour < 10 ? "0" : "") + hour + ":" + (min + rest < 10 ? "0" : "") + (min + rest) + ":" + (sec < 10 ? "0" : "") + sec);
}

timeToWalk(4000, 0.60, 5)