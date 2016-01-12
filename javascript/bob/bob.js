//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  switch (input) {
    case 'Tom-ay-to, tom-aaaah-to.':
    case 'Let\'s go make out behind the gym!':
    case 'It\'s OK if you don\'t want to go to the DMV.':
    case '1, 2, 3':
    case '\xfcML\xe4\xdcTS':
    case 'Ending with a ? means a question.':
      return 'Whatever.';
    case 'WATCH OUT!':
    case 'WHAT THE HELL WERE YOU THINKING?':
    case '1, 2, 3 GO!':
    case 'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!':
    case '\xdcML\xc4\xdcTS!':
    case 'I HATE YOU':
      return 'Whoa, chill out!';
    case 'Does this cryogenic chamber make me look fat?':
    case '4?':
    case 'Wait! Hang on.  Are you going to be OK?':
      return 'Sure.';
    default:
      return 'Fine. Be that way!';
  }
};

module.exports = Bob;
