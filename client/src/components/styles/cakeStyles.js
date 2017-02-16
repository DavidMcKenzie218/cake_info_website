const CakeStyles = function(){
  this.cakeStyle = {
    height: "450px",
    width: "300px",
    margin: "8px"
  }
  this.imageDimensions = {
    height: "300px",
    width: "300px",
    display: "block"
  }
  this.editStyle = {
    display: "block",
    margin: "1px"
  }
  this.buttonStyle = {
    height: "40px",
    width: "60px",
    backgroundColor: "#e8e1ff"
  }
  this.inputStyle = {
    height: "10px",
    width: "100px"
  }
}

CakeStyles.prototype = {
  optimisation: function(){
    this.cakeStyle.height =  "1350px";
    this.cakeStyle.width = "900px";
    this.cakeStyle.fontSize = "300%";

    this.imageDimensions.height = "900px";
    this.imageDimensions.width = "900px";

    this.buttonStyle.height = "120px";
    this.buttonStyle.width = "100%";
    this.buttonStyle.height = "200px";
    this.buttonStyle.fontSize = "100%";

    this.inputStyle.height = "50px";
    this.inputStyle.width = "700px";
    this.inputStyle.fontSize = "100%";
  }
}

module.exports = CakeStyles;