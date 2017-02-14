const assert = require('assert');
const CakeData = require('../cakeData.js');

describe("When searching for cakes;", function(){

  let cakes;
  let exampleData = [{title: "sponge"}, {title: "chocolate"}]

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

  it("should be able t find a specific cake", function(){
    cakes.addApiData(exampleData);
    cakes.searchFor("sponge");
    assert.deepEqual([{title: "sponge"}], cakes.searchResults);
  })

  it("can find a cake with only part of name", function(){
    cakes.addApiData(exampleData);
    cakes.searchFor("spo");
    assert.deepEqual([{title: "sponge"}], cakes.searchResults);
  })

})