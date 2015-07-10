// Create a BST from a sorted array.  
 
var arr = [2, 5, 6, 7, 8, 11, 15, 35, 47, 67, 70];

var BinaryTree = function(){
	this.root = null;
}


BinaryTree.prototype.addNode = function(data, root) {
	root = root || this.root;
	if(this.root === null) {
		this.root = {val: data};
	} else if (data > root.val && !root.right){
		root.right = {val: data};
	} else if (data < root.val && !root.left){
		root.left = {val: data};
	} else if(data > root.val){
		this.addNode(data, root.right);
	} else {
		this.addNode(data, root.left);
	}
}
var calculateMid = function(arr){
	return Math.floor(arr.length/2);
}
var solution = function(arr) {
	var bt = new BinaryTree();
	
	var addMiddle = function(arr){
		if(arr.length === 0) {return;}
		else {
			var midIndex = calculateMid(arr);
			bt.addNode(arr[midIndex]);
			var leftArr = arr.slice(0,midIndex);
			var rightArr = arr.slice(midIndex+1);
			addMiddle(leftArr);
			addMiddle(rightArr);
		}
	}
	addMiddle(arr);
	return bt;
}
// solution(arr);