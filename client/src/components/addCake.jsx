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
          <label>
            Name of Cake: 
            <input type="text" onChange={this.addTitle} />
          </label>
          <label>
            Url of an Image of the Cake: 
            <input type="text" onChange={this.addImage} />
          </label>
          <label>
            Description of Cake: 
            <input type="text" onChange={this.addDescription} />
          </label>
          <button onClick={this.submitData}>Submit</button>
      </div>
    )
  }

})

module.exports = AddCake;