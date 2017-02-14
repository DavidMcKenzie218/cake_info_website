const CakeData = function(){

  this.data = [];
  this.searchResults = [];

}

CakeData.prototype = {

  reset: function(){
    this.data = [];
    this.searchResults = [];
  },

  //Adds data to the end of this.data
  addData: function(newData){
    this.data.push(newData)
  },

  //Takes in the api data in array from and adds all the cakes individually
  addApiData: function(apiData){
    let cakeList = apiData;
    cakeList.forEach(function(cake){
      this.addData(cake);
    }.bind(this))
  },

  addSearchResult: function(result){
    this.searchResults.push(result);
  },

  searchFor: function(keyword){
    this.data.forEach(function(cake){
      let name = cake.name;
      let result = name.match(keyword);
      if(result != null) this.addSearchResult(cake);
    }.bind(this))
  }

}

module.exports = CakeData;