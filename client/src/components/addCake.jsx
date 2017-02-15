const React = require('react');

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
    this.addCakeStyle = {
      height: "400px",
      width: "400px",
      margin: "8px"
    }
    this.inputStyle = {
      display: "block",
      margin: "2px"
    }
  },

  render: function(){
    return(
      <div style={this.addCakeStyle}>
          <label style={this.inputStyle}>
            Name of Cake: 
            <input type="text" onChange={this.addTitle} />
          </label>
          <label style={this.inputStyle}>
            Url of an Image of the Cake: 
            <input type="text" onChange={this.addImage} />
          </label>
          <label style={this.inputStyle}>
            Description of Cake: 
            <input type="text" onChange={this.addDescription} />
          </label>
          <button onClick={this.submitData}>Submit</button>
      </div>
    )
  }

})

module.exports = AddCake;