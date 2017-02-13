const React = require('react');
const CakeInformation = require('./cakeInformation.jsx');
const ApiRequest = require('../models/dataHandler.js');

const Container = React.createClass({

  componentDidMount: function(){
    
  },

  render: function(){
    return(
      <CakeInformation/>
    )
  }

})

module.exports = Container;