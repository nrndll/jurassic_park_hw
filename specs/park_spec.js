const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park("Jurassic Park", 100)
    dinosaur = Dinosaur('Dino', 'herbivore', 5);
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

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur)
    assert.deepStrictEqual(park.collectionOfDinosaurs.length, 1)
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
