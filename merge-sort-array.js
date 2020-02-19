// ES 5
Array.prototype.merge_Sort = function() {
  if (this.length <= 1) {
    return this;
  }

  var half = parseInt(this.length / 2);
  var left = this.slice(0, half).merge_Sort();
  var right = this.slice(half, this.length).merge_Sort();

  var merge = function(left, right) {
    var arry = [];

    while (left.length > 0 && right.length > 0) {
      arry.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return arry.concat(left).concat(right);
  };

  return merge(left, right);
};

var arr = [34, 7, 23, 32, 5, 62];
console.log(arr.merge_Sort());
