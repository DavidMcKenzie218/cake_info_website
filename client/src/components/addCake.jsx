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

  render: function(){
    return(
      <div>
        <p>Name of the Cake</p>
        <input type="text" onChange={this.addTitle}/>
        <p>Url for an Image of the Cake</p>
        <input type="text" onChange={this.addImage}/>
        <p>Decription of the Cake</p>
        <input type="text" onChange={this.addDescription}/>
        <button onClick={this.submitData}>Submit</button>
      </div>
    )
  }

})

module.exports = AddCake;