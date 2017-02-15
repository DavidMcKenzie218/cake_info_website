const React = require('react');

const cakeInformation = React.createClass({

  getInitialState: function(){
    this.cakeStyle = {
      height: "400px",
      width: "400px",
      margin: "8px"
    }
    this.imageDimensions = {
      height: "300px",
      width: "300px"
    }
    this.editStyle = {
      display: "block",
      margin: "2px"
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
          <label style={this.editStyle}>
            Name: 
            <input onChange={this.editTitle} placeholder={this.state.title}/>
          </label>
          <label style={this.editStyle}>
            Image: 
            <input onChange={this.editImage} placeholder={this.state.img}/>
          </label>
          <img src={this.state.img} style={this.imageDimensions}/>
          <label style={this.editStyle}>
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