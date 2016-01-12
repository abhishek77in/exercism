var Year = function (input) {
  this.input = input;
};

Year.prototype.isLeap = function(){
  var divisibleByFourHundred = ( this.input % 400 == 0 );
  var divisibleByHundred = ( this.input % 100 == 0 );
  var divisibleByFour = ( this.input % 4 == 0 );
  return (divisibleByFourHundred || (divisibleByFour && !divisibleByHundred));
};

module.exports = Year;