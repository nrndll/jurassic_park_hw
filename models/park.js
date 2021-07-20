const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    let dinoIndex = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(dinoIndex, 1);
};

Park.prototype.attractsMostGuests = function(){
    let currentDino = this.collectionOfDinosaurs[0];
    for (i=0;i<this.collectionOfDinosaurs.length;i++){
        if (currentDino.guestsAttractedPerDay < this.collectionOfDinosaurs[i].guestsAttractedPerDay){
            currentDino = this.collectionOfDinosaurs[i];
        }
    }
    return currentDino
}

Park.prototype.allOfSpecies = function(species){
    let allSpecies = [];
    for (i=0;i<this.collectionOfDinosaurs.length;i++){
        if (this.collectionOfDinosaurs[i].species === species){
            allSpecies.push(this.collectionOfDinosaurs[i]);
        }
    }
    return allSpecies;
}

Park.prototype.noVisitorsDay = function(){
    let total = 0;
    for (i = 0; i < this.collectionOfDinosaurs.length; i++){
        total += this.collectionOfDinosaurs[i].guestsAttractedPerDay;
    }
    return total;
}

module.exports = Park;