const CakeData = function(){

  this.data = [];

}

CakeData.prototype = {

  reset: function(){
    this.data = [];
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
  }

}

module.exports = CakeData;