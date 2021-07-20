const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 100)
  });

  it('should have a name', function (){
    assert.strictEqual(park.name, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 100)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.collectionOfDinosaurs, [])
  });


  describe('with dinosaur', function(){
    let dinosaur;

    beforeEach(function(){
      dinosaur = new Dinosaur('Dino', 'herbivore', 5);
    })

    it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur(dinosaur)
      assert.deepStrictEqual(park.collectionOfDinosaurs.length, 1)
    });

    it('should be able to remove a dinosaur from its collection', function () {
      park.addDinosaur(dinosaur);
      park.removeDinosaur(dinosaur);
      assert.deepStrictEqual(park.collectionOfDinosaurs.length, 0);
    });

    describe('with multiple dinosaurs', function(){
      let dinosaur2;
      let dinosaur3;
      let dinosaur4;
      let dinosaur5;

      beforeEach(function(){
        dinosaur2 = new Dinosaur('Stegosaurus', 'herbivore', 10);
        dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 50);
        dinosaur4 = new Dinosaur('Triceratops', 'herbivore', 15);
        dinosaur5 = new Dinosaur('Velociraptor', 'carnivore', 60);

        park.addDinosaur(dinosaur);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        park.addDinosaur(dinosaur4);
        park.addDinosaur(dinosaur5);
      })

      it('should be able to find the dinosaur that attracts the most visitors', function () {
        dinoMostGuests = park.attractsMostGuests();
        assert.deepStrictEqual(dinoMostGuests, dinosaur5);
      });

      it('should be able to find all dinosaurs of a particular species', function () {
        allSpecies = park.allOfSpecies('Velociraptor');
        assert.deepStrictEqual(allSpecies.length, 2);
      });

      it('should be able remove all dinosaurs of a particular species', function(){
        dinoCollection = park.removeSpecies('Velociraptor');
        assert.deepStrictEqual(dinoCollection.length, 3);
      });

      it('should be able to calculate the total number of visitors per day', function(){
        let total = park.visitorsDay();
        const actual = dinosaur.guestsAttractedPerDay + dinosaur2.guestsAttractedPerDay + dinosaur3.guestsAttractedPerDay + dinosaur4.guestsAttractedPerDay + dinosaur5.guestsAttractedPerDay;
        assert.strictEqual(total, actual);
      });

      it('should be able to calculate the total number of visitors per year', function(){
        let total = park.visitorsYear();
        const actualday = dinosaur.guestsAttractedPerDay + dinosaur2.guestsAttractedPerDay + dinosaur3.guestsAttractedPerDay + dinosaur4.guestsAttractedPerDay + dinosaur5.guestsAttractedPerDay;
        const actual = actualday * 365;
        assert.strictEqual(total, actual);
      });

      it('should be able to calculate total revenue for one year', function(){
        let total = park.revenueYear();
        const visitorsDay = dinosaur.guestsAttractedPerDay + dinosaur2.guestsAttractedPerDay + dinosaur3.guestsAttractedPerDay + dinosaur4.guestsAttractedPerDay + dinosaur5.guestsAttractedPerDay;
        const totalVisitors = visitorsDay * 365;
        const actual = totalVisitors * park.ticketPrice;
        assert.strictEqual(total, actual);
      });

    })

  })

});
