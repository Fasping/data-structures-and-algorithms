/*

A fibonacci sequence is written as:

0, 1, 1, 2, 3, 5, 8, 13, 21, ...

Fibonacci series is a series that generates subsequent series of numbers by the addition of the two previous numbers. The first two terms of the Fibonacci series are zero and one, respectively. And the next terms are the addition of the two previous terms.

Example:

First terms of the series is: 0
Second term of the series is: 1
Third terms of the series is: (0 + 1) = 1
Fourth terms of the series is: (second + third) term = (1 + 1) = 2
Fifth term of the series is: (Third + fourth) = 1 + 2 = 3

*/

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
