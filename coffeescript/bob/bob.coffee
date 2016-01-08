class Bob
  hey: (message) ->
    switch message
      when "Tom-ay-to, tom-aaaah-to."
           , "Let's go make out behind the gym!"
           , "1, 2, 3"
           , "Ending with a ? means a question."
           , "It's OK if you don't want to go to the DMV." then "Whatever."
      when "WATCH OUT!"
           , "1, 2, 3 GO!"
           , "ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!"
           , "I HATE YOU"
           , "WHAT THE HELL WERE YOU THINKING?" then "Whoa, chill out!"
      when "Does this cryogenic chamber make me look fat?"
           , "Wait! Hang on.  Are you going to be OK?" then "Sure."
      else
        "Fine. Be that way!"

module.exports = Bob
