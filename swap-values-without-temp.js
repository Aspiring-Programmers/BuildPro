// a=2, b=3 => a=3, b=2
// This will only work with numbers

function swap_values(num1, num2) {
    num1 = num1 + num2; // a = a(2) + b(3) => a = 5
    num2 = num1 - num2; // b = a(5) - b(3) => b = 2
    num1 = num1 - num2; // a = a(5) - b(2) => a = 3
    return [num1, num2];
}
console.log(swap_values(2,3));