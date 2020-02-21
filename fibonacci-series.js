// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .

// ES 5 - Recursive way
var fibonacci_series = function(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(8));

// ES 5 - Non-Recursive way
function fib(n) {
	var a=0, b=1;
	for (var i=0; i < n; i++) {
		var temp = a+b; 
		a = b;
		b = temp;
	}
	return a;
}
