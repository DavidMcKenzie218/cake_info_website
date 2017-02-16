const React = require('react');
const Style = require('./styles/cakeStyles.js')

const cakeInformation = React.createClass({

  getInitialState: function(){
    this.style = new Style();

    return({edit: false, title: this.props.title, img: this.props.image, desc: this.props.desc});
  },

  styles: function(){
    this.cakeStyle = this.style.cakeStyle;

    this.imageDimensions = this.style.imageDimensions;

    this.editStyle = this.style.editStyle;

    this.buttonStyle = this.style.buttonStyle;

    this.inputStyle = this.style.inputStyle;

    if(window.innerWidth <= 800) {
      this.style.optimisation();
    }
  },

  editCake: function(){
    this.setState({edit: true});
  },

  saveChanges: function(){
    this.setState({edit: false});
    this.props.editCakeData({title: this.state.title, image: this.state.img, desc: this.state.desc}, this.props.index);
  },

  editTitle: function(event){
    this.setState({title: event.target.value});
  },

  editImage: function(){
    this.setState({img: event.target.value});
  },
  
  editDescriptions: function(){
    this.setState({desc: this.target.value});
  },  

  componentWillMount: function(){
    this.styles();
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({title: nextProps.title, img: nextProps.image, desc: nextProps.desc})
  },

  render: function(){
    if(this.state.edit){
      return(
        <div style={this.cakeStyle}>
          <label style={this.editStyle}>
            Name: 
            <input onChange={this.editTitle} placeholder={this.state.title} style={this.inputStyle}/>
          </label>
          <label style={this.editStyle}>
            Image: 
            <input onChange={this.editImage} placeholder={this.state.img} style={this.inputStyle}/>
          </label>
          <img src={this.state.img} style={this.imageDimensions}/>
          <label style={this.editStyle}>
            Description: 
            <input onChange={this.editDescriptions} placeholder={this.state.desc} style={this.inputStyle}/>
          </label>
          <button onClick={this.saveChanges} style={this.buttonStyle}>Save Changes</button>
        </div>
      )
    }

    return(
        <div style={this.cakeStyle}>
          <h3>{this.state.title}</h3>
          <img src={this.state.img} style={this.imageDimensions}/>
          <span style={this.editStyle}>{this.state.desc}</span>
          <button onClick={this.editCake} style={this.buttonStyle}>Edit</button>
        </div>
      )
    
  }

})

module.exports = cakeInformation;