const assert = require('assert');
const CakeData = require('../cakeData.js');

describe("The Cake Data;", function(){

  let cakes;

  before(function(){
    cakes = new CakeData();
  })

  beforeEach(function(){
    cakes.reset();
  })

  it("should have no data", function(){
    assert.deepEqual([], cakes.data)
  })

  it("should be able to add data", function(){
    cakes.addData("sponge")
    assert.deepEqual(["sponge"], cakes.data);
  })

})