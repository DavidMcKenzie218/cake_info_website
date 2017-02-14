const React = require('react');

const SearchBox = React.createClass({

  render: function(){
    return(
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      )
  }

})

module.exports = SearchBox;