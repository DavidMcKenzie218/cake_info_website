const React = require("react");
const ReactDOM = require('react-dom');
const ApiRequest = require('./models/dataHandler.js');

const addDiv = function(parent){
  let div = document.createElement('div');
  div.id = 'react-container';
  parent.appendChild(div);
}

const reactContainer = function(){
  let body = document.querySelector('body');
  addDiv(body);
}

window.onload = function(){

  let api = new ApiRequest();

  api.getAll("https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json");

  reactContainer();

  ReactDOM.render(
    <h1>Hello World</h1>, 
    document.querySelector('#react-container')
  );

}