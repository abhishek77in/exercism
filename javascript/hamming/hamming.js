var Hamming = function () {};

Hamming.prototype.compute = function (strandOne, strandTwo) {
  this.validateInputs(strandOne, strandTwo);
  return this.hammingDistance();
};

Hamming.prototype.validateInputs = function (strandOne, strandTwo) {
  if (strandOne.length !== strandTwo.length) {
    throw('DNA strands must be of equal length.');
  }
};

Hamming.prototype.hammingDistance = function () {
  return 0;
};

module.exports = Hamming;