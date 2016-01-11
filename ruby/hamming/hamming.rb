class Hamming
  VERSION = 1

  def self.compute(strand_one, strand_two)
    validate_inputs(strand_one, strand_two)

    strand_length = strand_one.length
    strand_length.times.inject(0) do |sum, index|
      sum + (strand_one[index] <=> strand_two[index]).abs
    end
  end

  def self.validate_inputs(strand_one, strand_two)
    raise ArgumentError if strand_one.length != strand_two.length
  end

end