const assert = require('assert');
const CakeData = require('../cakeData.js');

describe("When searching for cakes;", function(){

  let cakes;

  before(function(){
    cakes = new CakeData();
  })

  beforeEach(function(){
    cakes.reset();
  })

  it("should have no results", function(){
    assert.deepEqual([], cakes.searchResults);
  })

  it("should be able to have results", function(){
    cakes.addSearchResult("Cake");
    assert.deepEqual(["Cake"], cakes.searchResults);
  })

})