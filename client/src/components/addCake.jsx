const React = require('react');
const Style = require('./styles/cakeStyles.js')

const AddCake = React.createClass({

  addTitle: function(event){
    this.newTitle = event.target.value;
  },

  addImage: function(event){
    this.newImage = event.target.value;
  },

  addDescription: function(event){
    this.newDesc = event.target.value;
  },

  submitData: function(){
    this.props.addCake(this.newTitle, this.newImage, this.newDesc);
  },

  componentWillMount: function(){
    this.style = new Style();

    this.addCakeStyle = this.style.cakeStyle;

    this.inputStyle = this.style.inputStyle;

    this.buttonStyle = this.style.buttonStyle;

    this.editStyle = this.style.editStyle;

    this.buttonStyle = this.style.buttonStyle

    if(window.innerWidth <= 800) {
      this.style.optimisation();
    }
  },

  render: function(){
    return(
      <div style={this.addCakeStyle}>
          <label style={this.editStyle}>
            Name of Cake: 
            <input type="text" onChange={this.addTitle} style={this.inputStyle}/>
          </label>
          <label style={this.editStyle}>
            Url of an Image of the Cake: 
            <input type="text" onChange={this.addImage} style={this.inputStyle}/>
          </label>
          <label style={this.editStyle}>
            Description of Cake: 
            <input type="text" onChange={this.addDescription} style={this.inputStyle}/>
          </label>
          <button onClick={this.submitData} style={this.buttonStyle}>Submit</button>
      </div>
    )
  }

})

module.exports = AddCake;