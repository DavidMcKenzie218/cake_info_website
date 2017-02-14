const React = require('react');

const SearchBox = React.createClass({

  search: function(event){
    let keyword = event.target.value;
    if(keyword.length > 3) this.props.searchCakes(keyword);
  },

  render: function(){
    return(
      <div>
        <p>Search: </p>
        <input type="text" onChange={this.search}/>
      </div>
      )
  }

})

module.exports = SearchBox;