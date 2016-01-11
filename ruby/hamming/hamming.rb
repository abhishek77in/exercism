class Hamming
  VERSION = 1

  def self.compute(strand_one, strand_two)
    raise ArgumentError if strand_one.length != strand_two.length
    (0...strand_one.length).to_a.collect { |index|
      (strand_one[index] <=> strand_two[index]).abs
    }.inject(:+).to_i
  end

end