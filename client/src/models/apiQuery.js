const apiRequest = function(){

}

apiRequest.prototype = {
  get: function(url, callback){
    const request = new XMLHttpRequest();
    request.open("GET", url);
    console.log("Request opened to Api");
    request.onload = callback;
    request.send();
    console.log("Request sent to Api");
  }
}

module.exports = apiRequest;