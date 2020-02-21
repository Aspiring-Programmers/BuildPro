// ES 6 - Using Filter
function unque_array(arr) {
 	let unique_array = arr.filter(function(elem, index, self) {
      return index == self.indexOf(elem); 
  } 
	return unique_array;
}
console.log(unique_array(array_with_duplicates));
