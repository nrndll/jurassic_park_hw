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
            currentDino = this.collectionOfDinosaurs[i]
        }
    }
    return currentDino
}

module.exports = Park;