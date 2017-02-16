const React = require('react');
const CakeInformation = require('./cakeInformation.jsx');
const ApiRequest = require('../models/dataHandler.js');
const CakeData = require('../models/cakeData.js');
const SearchBox = require('./searchBox.js');
const AddCake = require('./addCake.jsx');

const Container = React.createClass({

  getInitialState: function(){
    this.api = new ApiRequest();
    this.cakeData = new CakeData();
    
    return {cakes: [], search: false}
  },

  searchForCake: function(keyword){
    this.cakeData.searchFor(keyword);
    if(this.cakeData.searchResults.length > 0) this.setState({search: true, cakes: this.cakeData.searchResults})
  },

  resetSearch: function(){
    this.setState({search: false, cakes: this.cakeData.data})
  },

  addNewCake: function(title, image, desc){
    this.cakeData.addData({title: title, image: image, desc: desc});
    this.setState({cakes: this.cakeData.data});
  },

  editCurrentCake: function(cakeData, index){
    this.cakeData.editData(index, cakeData)
  },

  componentDidMount: function(){
    this.api.getAll("https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json", function(data){
      let cakes = this.cakeData.addApiData(data);
      if(cakes != this.state.cakes) this.setState({cakes: this.cakeData.data});
    }.bind(this))   
  },

  componentWillMount: function(){
    this.bodyStyle = {
      display: "flex",
      flexWrap: "wrap"
    }
  },

  render: function(){

    if(this.state.cakes == []) return(<p>Loading cakes now</p>)

    let cakes = this.state.cakes.map(function(cake, index){
      return(<CakeInformation id={cake} key={index} index={index} title={cake.title} image={cake.image} desc={cake.desc} editCakeData={this.editCurrentCake}></CakeInformation>)
    }.bind(this))

    return(
      <div>
        <SearchBox searchCakes={this.searchForCake} stopSearch={this.resetSearch}/>
        <div style={this.bodyStyle}>
          {cakes}
          <AddCake addCake={this.addNewCake}/>
        </div>
      </div>
    )
  }

})

module.exports = Container;