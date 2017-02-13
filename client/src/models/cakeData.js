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
  }

}

module.exports = CakeData;