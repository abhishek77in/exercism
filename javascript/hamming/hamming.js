var Hamming = function () {};

Hamming.prototype.compute = function (strandOne, strandTwo) {
  this.validateInputs(strandOne, strandTwo);
  return this.hammingDistance(strandOne, strandTwo);
};

Hamming.prototype.validateInputs = function (strandOne, strandTwo) {
  if (strandOne.length !== strandTwo.length) {
    throw('DNA strands must be of equal length.');
  }
};

Hamming.prototype.hammingDistance = function (strandOne, strandTwo) {
  var strandLength = strandOne.length;
  var distance = 0;
  var index;
  for (index = 0; index < strandLength; index++) {
    distance = distance + this.hammingDiff(strandOne.charAt(index), strandTwo.charAt(index));
  }
  return distance;
};

Hamming.prototype.hammingDiff = function (nucleotide_one, nucleotide_two) {
  if (nucleotide_one === nucleotide_two) {
    return 0;
  }
  return 1;
};

module.exports = Hamming;