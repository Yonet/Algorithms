// compute the height of a given binary tree

var findHeight = function(root){
	if(root == null) {
		return -1;
	} else {
		var leftHeight = findHeight(root.left);
		var rightHeight = findHeight(root.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}
};