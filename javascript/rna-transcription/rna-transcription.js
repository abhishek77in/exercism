var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var rnaStrand = '';
  var strandLength = dnaStrand.length;
  for (var i = 0; i < strandLength; i++) {
    rnaStrand += this.nucleotideComplement(dnaStrand.charAt(i));
  }
  return rnaStrand;
};

DnaTranscriber.prototype.nucleotideComplement = function(nucleotide) {
  const complementNucleotideMapping = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };
  return complementNucleotideMapping[nucleotide];
};

module.exports = DnaTranscriber;
