// Write a method to find the next ancestor of a node in a Binary Search Tree.

var BinaryTree = function(){
	this.root = null;
};

var checkNode = function(root, data){
	if(!root.right && data > root.val) {
		console.log('adding data to right of ', root)
		root.right = {val:data};
	} else if (!root.left && data < root.val){
		console.log('adding data to left of ', root)
		root.left = {val:data};
	} else if(data > root.val){
		checkNode(root.right, data);
	} else {
		checkNode(root.left, data);
	}
}

BinaryTree.prototype.addNode = function(data){
	if(this.root === null) {
		this.root = {};
		this.root.val = data;
	} else {
		checkNode(this.root, data);
	}
};


BinaryTree.prototype.findNextAncestor = function(root, data){
	if(root.right && root.right.val === data || root.left && root.left.val === data) {
		return root;
	} else if(root.val < data){
		return this.findNextAncestor(root.right, data);
	} else {
		return this.findNextAncestor(root.left, data);
	}
}

var bt = new BinaryTree();
bt.addNode(5);

bt.findNextAncestor(bt.root, 23);

