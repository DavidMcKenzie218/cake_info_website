const ApiQuery = require('./apiQuery.js');

const DataHandler = function(){

  this.apiRequest = new ApiQuery();
  this.data;

}

DataHandler.prototype = {

  getAll: function(apiRoute, onCompleted){
    const self = this;
    var url = apiRoute;
    this.apiRequest.get(url, function(){
      if(this.status != 200) return;
      let jsonString = this.responseText;
      self.processData(jsonString, onCompleted);
    })
  },
  processData: function(jsonData, onCompleted){
    this.data = JSON.parse(jsonData);
    onCompleted(this.data);
  }

}

module.exports = DataHandler