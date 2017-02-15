const React = require("react");
const ReactDOM = require('react-dom');
const FrontEnd = require('./components/mainBodyContainer.jsx');
const ApiRequest = require('./models/dataHandler.js');
const CakeData = require('./models/cakeData.js');

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

  reactContainer();

  ReactDOM.render(
    <FrontEnd/>, 
    document.querySelector('#react-container')
  );

}