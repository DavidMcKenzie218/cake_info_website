const ApiQuery = require('./apiQuery.js');

const DataHandler = function(){

  this.apiRequest = new ApiQuery();
  this.data;

}

DataHandler.prototype = {

  getAll: function(apiRoute){
    const self = this;
    var url = apiRoute;
    this.apiRequest.get(url, function(){
      if(this.status != 200) return;
      let jsonString = this.responseText;
      self.processData(jsonString);
    })
  },
  processData: function(jsonData){
    this.data = JSON.parse(jsonData);
  }

}

module.exports = DataHandler