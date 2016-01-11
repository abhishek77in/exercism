class Hamming
  VERSION = 1

  def self.compute(strand_one, strand_two)
    validate_inputs(strand_one, strand_two)
    hamming_distance(strand_one, strand_two)
  end

  private
  def self.hamming_distance(strand_one, strand_two)
    strand_length = strand_one.length
    strand_length.times.inject(0) do |sum, index|
      sum + hamming_diff(strand_one[index], strand_two[index])
    end
  end

  def self.hamming_diff(nucleotide_one, nucleotide_two)
    (nucleotide_one <=> nucleotide_two).abs
  end

  def self.validate_inputs(strand_one, strand_two)
    raise ArgumentError if strand_one.length != strand_two.length
  end

end