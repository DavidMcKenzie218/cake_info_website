const React = require('react');

const cakeInformation = React.createClass({

  getInitialState: function(){
    return({edit: false, title: this.props.title, img: this.props.image, desc: this.props.desc});
  },

  editCake: function(){
    this.setState({edit: true});
  },

  saveChanges: function(){
    this.setState({edit: false});
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

  componentWillReceiveProps: function(nextProps){
    this.setState({title: nextProps.title, img: nextProps.image, desc: nextProps.desc})
  },

  render: function(){
    if(this.state.edit){
      return(
        <div>
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
        <div>
          <h3>{this.state.title}</h3>
          <img src={this.state.img}/>
          <p>{this.state.desc}</p>
          <button onClick={this.editCake}>Edit</button>
        </div>
      )
    
  }

})

module.exports = cakeInformation;