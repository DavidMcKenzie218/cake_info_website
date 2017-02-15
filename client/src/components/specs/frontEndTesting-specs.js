const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const expect = require('expect');
const Root = require('../mainBodyContainer.jsx');

describe("The Root;", function(){

  it("renders without any problems", function(){
    let container = TestUtils.renderIntoDocument(<Root/>);
    expect(container).toExist();
  })

})