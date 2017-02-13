const React = require('react');

const cakeInformation = React.createClass({

  render: function(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.image}/>
        <p>{this.props.desc}</p>
      </div>
    )
  }

})

module.exports = cakeInformation;