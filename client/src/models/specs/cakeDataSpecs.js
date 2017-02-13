const assert = require('assert');
const CakeData = require('../cakeData.js');

describe("The Cake Data;", function(){

  let cakes;
  let exampleData = [{name: "sponge"}, {name: "chocolate"}]

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

  it("should be able to sort the incoming data into individule pieces of data", function(){
    cakes.addApiData(exampleData);
    assert.deepEqual([{name: "sponge"}, {name: "chocolate"}], cakes.data);
  })

})