// Return array with all values in a binary search tree that are between two values x and y. 

var BinaryTree = function(){
	this.root = null;
}

BinaryTree.prototype.addNode = function(data, root) {
	root = root || this.root;
	if(!this.root) {
		this.root = {val: data};
	} else {
		if(data >= root.val) {
			if(!root.right){
				root.right = {
					val: data
				}
			} else {
				this.addNode(data, root.right);
			}
			
		} else {
			if(!root.left) {
				root.left = {
					val: data
				}
			} else {
				this.addNode(data, root.left)
			}
			
		}
	}
}

BinaryTree.prototype.inOrderSearch = function(root, func){
	if(!root){
		return;
	} else {
		this.inOrderSearch(root.left, func);
		if(func) {
			func(root);
		}
		this.inOrderSearch(root.right, func);
	}
}

var solution = function(bt, x, y){
	var flattened = [];
	bt.inOrderSearch(bt.root, function(node){
		flattened.push(node.val);
	});
	var start = flattened.indexOf(x);
	var end = flattened.indexOf(y);
	var result = flattened.slice(start, end);
	return result
}

var bt = new BinaryTree();
bt.addNode(42);
bt.addNode(48);
bt.addNode(23);
bt.addNode(23);
bt.addNode(13);
bt.addNode(33);


solution(bt, 13, 48);





