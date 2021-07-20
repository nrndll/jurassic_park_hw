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


  describe('with dinosaurs', function(){

    let dinosaur;
    let dinosaur2;
    let dinosaur3;
    let dinosaur4;
    let dinosaur5;

    beforeEach(function(){
      dinosaur = new Dinosaur('Dino', 'herbivore', 5);
      dinosaur2 = new Dinosaur('Stegosaurus', 'herbivore', 10);
      dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 50);
      dinosaur4 = new Dinosaur('Triceratops', 'herbivore', 15);
      dinosaur5 = new Dinosaur('Velociraptor', 'carnivore', 60);
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

    it('should be able to find the dinosaur that attracts the most visitors', function(){
      park.addDinosaur(dinosaur);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      park.addDinosaur(dinosaur4);
      park.addDinosaur(dinosaur5);
      dinoMostGuests = park.attractsMostGuests();
      assert.deepStrictEqual(dinoMostGuests, dinosaur5);
    });

    it('should be able to find all dinosaurs of a particular species');

    it('should be able to calculate the total number of visitors per day');

    it('should be able to calculate the total number of visitors per year');

    it('should be able to calculate total revenue for one year');


  })

});
