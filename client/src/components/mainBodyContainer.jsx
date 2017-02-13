const React = require('react');
const CakeInformation = require('./cakeInformation.jsx');
const ApiRequest = require('../models/dataHandler.js');
const CakeData = require('../models/cakeData.js');

const Container = React.createClass({

  componentDidMount: function(){
    let api = new ApiRequest();
    let cakeData = new CakeData();

    api.getAll("https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json", function(data){
      cakeData.addApiData(data);
    });
    console.log(cakeData.data)
  },

  render: function(){
    return(
      <CakeInformation/>
    )
  }

})

module.exports = Container;