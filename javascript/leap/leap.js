var Year = function (input) {
  this.input = input;
};

Year.prototype.isLeap = function(){
  if ( this.input % 400 == 0 ) {
    return true;
  }
  if ( this.input % 100 == 0 ) {
    return false;
  }
  if ( this.input % 4 == 0 ) {
    return true;
  }
  return false;
};

module.exports = Year;