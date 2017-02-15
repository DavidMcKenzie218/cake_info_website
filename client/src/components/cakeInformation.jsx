const React = require('react');

const cakeInformation = React.createClass({

  getInitialState: function(){
    this.cakeStyle = {
      height: "600px"
    }
    this.imageDimensions = {
      height: "300px",
      width: "300px"
    }

    return({edit: false, title: this.props.title, img: this.props.image, desc: this.props.desc});
  },

  editCake: function(){
    this.setState({edit: true});
  },

  saveChanges: function(){
    this.setState({edit: false});
  },

  editTitle: function(event){
    this.setState({title: event.target.value})
  },  

  render: function(){
    if(this.state.edit){
      return(
        <div style={this.cakeStyle}>
          <label>
            Name: 
            <input onChange={this.editTitle} placeholder={this.state.title}/>
          </label>
          <label>
            Image: 
            <input onChange={this.editImage} placeholder={this.state.img}/>
          </label>
          <label>
            Description: 
            <input onChange={this.editDescriptions} placeholder={this.state.desc}/>
          </label>
          <button onClick={this.saveChanges}>Save Changes</button>
        </div>
      )
    }

    return(
        <div style={this.cakeStyle}>
          <h3>{this.state.title}</h3>
          <img src={this.state.img} style={this.imageDimensions}/>
          <p>{this.state.desc}</p>
          <button onClick={this.editCake}>Edit</button>
        </div>
      )
    
  }

})

module.exports = cakeInformation;