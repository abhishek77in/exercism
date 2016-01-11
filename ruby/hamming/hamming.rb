class Hamming
  VERSION = 1

  def self.compute(strand_one, strand_two)
    validate_inputs(strand_one, strand_two)

    strand_length = strand_one.length

    (0...strand_length).to_a.collect { |index|
      (strand_one[index] <=> strand_two[index]).abs
    }.inject(:+).to_i
  end

  def self.validate_inputs(strand_one, strand_two)
    raise ArgumentError if strand_one.length != strand_two.length
  end

end