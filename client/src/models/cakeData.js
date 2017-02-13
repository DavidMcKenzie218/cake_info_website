const CakeData = function(){

  this.data = [];

}

CakeData.prototype = {

  //Adds data to the end of this.data
  addData: function(newData){
    this.data.push(newData)
  }

}

module.exports = CakeData;