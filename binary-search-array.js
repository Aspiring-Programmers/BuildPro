// ES 5
Array.prototype.br_search = function(target) {
  var half = parseInt(this.length / 2);
  if (target === this[half]) {
    return half;
  } else if (target > this[half]) {
    return half + this.slice(half, this.length).br_search(target);
  } else {
    return this.slice(0, half).br_search(target);
  }
};

var arr = [0, 1, 2, 3, 4, 5, 6];

console.log(arr.br_search(5));
