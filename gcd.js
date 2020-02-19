// 336      360
//      2
// 2    2   3
// 7    2   5
//      3

// 336 = 2*7*2*2*2*3
// 360 = 3*5*2*2*2*3

// G.C.D. = 2*2*2*3 = 24

// ES 5
var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
console.log(gcd(2154, 458));
