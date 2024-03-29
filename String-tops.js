/*
Write a function that accepts msg string and 
returns local tops of string from the highest to the lowest.
The string's tops are from displaying the string in the below way:

                                                      3
                              p                     2   4
            g               o   q                 1
  b       f   h           n       r             z
a   c   e       i       m          s          y
      d           j   l             t       x
                    k                 u   w
                                        v
For the above example, 
the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

The next top is always 1 character higher than the previous one. 

When the msg string is empty, return an empty string.
The input strings may be very long. 
Make sure your solution has good performance.
*/


// Solution

function tops(msg) {
  let i = 1;
  let x = 5;
  let res = ''
  
  while (i <= msg.length) {
    res = msg[i] + res;
    i += x;
    x += 4
  }
  
  return res
}

// or

function tops(msg) {
  let [res, i, j] = ['', 0, 0];

  while (msg[j += i++ * 4 + 1]) {
    res = msg[j] + res;
  }
  return res;
}