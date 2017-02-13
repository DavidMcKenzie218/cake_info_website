const ApiQuery = require('./apiQuery.js');

const DataHandler = function(){

  this.apiRequest = new ApiQuery();

}

DataHandler.prototype = {

  getAll: function(apiRoute){
    var url = apiRoute;
    this.apiRequest.get(url, function(){
      if(this.status != 200) return;
      let jsonString = this.responseText;
      console.log(jsonString);
    })
  }

}

module.exports = DataHandler