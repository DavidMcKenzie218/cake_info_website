const ApiRequest = require('./models/dataHandler.js');

window.onload = function(){

  let api = new ApiRequest();

  api.getAll("https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json");

  console.log(api.Data)

}