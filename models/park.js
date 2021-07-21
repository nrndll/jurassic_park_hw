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
    for (let i=0;i<this.collectionOfDinosaurs.length;i++){
        if (currentDino.guestsAttractedPerDay < this.collectionOfDinosaurs[i].guestsAttractedPerDay){
            currentDino = this.collectionOfDinosaurs[i];
        }
    }
    return currentDino
}

Park.prototype.allOfSpecies = function(species){
    let allSpecies = [];
    for (let i=0;i<this.collectionOfDinosaurs.length;i++){
        if (this.collectionOfDinosaurs[i].species === species){
            allSpecies.push(this.collectionOfDinosaurs[i]);
        }
    }
    return allSpecies;
}

Park.prototype.removeSpecies = function(species){
    for (let i = this.collectionOfDinosaurs.length-1; i >= 0; i--) {
        if (this.collectionOfDinosaurs[i].species === species) {
            this.collectionOfDinosaurs.splice(i, 1);
        }
    }
    return this.collectionOfDinosaurs;
}

Park.prototype.visitorsDay = function(){
    let total = 0;
    for (let i = 0; i < this.collectionOfDinosaurs.length; i++){
        total += this.collectionOfDinosaurs[i].guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.visitorsYear = function(){
    let totalDay = this.visitorsDay();
    return (totalDay*365);
}

Park.prototype.revenueYear = function(){
    let totalDays = this.visitorsYear();
    return (totalDays*this.ticketPrice);
}


module.exports = Park;