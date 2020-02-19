// ES 5
function factorial(el) {
  if (el === 0) {
    return 1;
  }
  return el * factorial(el - 1);
}
console.log(factorial(5));

// ES 6
class Factorial {
  // untested !!
  factorial = el => {
    return el === 0 ? 1 : el * factorial(el - 1);
  };
}
console.log(Factorial.factorial(5));
