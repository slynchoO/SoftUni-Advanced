function constructionCrew(worker) {
    // Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters

    if(worker.dizziness == true) {
        let hydratation = Number(0.1 * worker.weight * worker.experience);
        worker.levelOfHydrated += hydratation;
        worker.dizziness = false;
    }


    return worker;
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));