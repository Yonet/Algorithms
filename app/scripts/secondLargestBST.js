//Find the second largest item in a binary search tree.

var secondLargest = function(root) {
	var current = root;
	if(!current.right) {return;}
	var checkCurrent = function(){
		if(!current.right.right) {
			return current.val;
		} else {
			current = current.right;
			return checkCurrent();
		} 
	}
	return checkCurrent();
}