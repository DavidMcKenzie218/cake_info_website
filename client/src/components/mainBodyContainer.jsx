const React = require('react');
const CakeInformation = require('./cakeInformation.jsx');

const Container = React.createClass({

  render: function(){
    return(
      <CakeInformation/>
    )
  }

})

module.exports = Container;