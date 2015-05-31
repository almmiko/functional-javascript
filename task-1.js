/*
# Task
Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
*/

function repeat(operation, num) {
      // while (num < num.length) {
      //   operation();
      //   num++;
      // }
      if ( num <= 0 ) { return }
      return repeat(operation, --num)

    }

    // Do not remove the line below
    module.exports = repeat
