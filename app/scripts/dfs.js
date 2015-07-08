// dfs

var TreeNode = function(node){
	this.parent = node.parent || null;
	this.children = node.children || null;
};

TreeNode.prototype.isLeaf =  function(node){
	return this.children.length === 0;
}

var dfs = function(root, func){
	if (func){
		func(root);
	}
	if(root.children && root.children.isArray){
		root.children.forEach(function(child){
			dfs(root.children[child], func);
		})
	} else {
		for (child in root.children){
			dfs(root.children[child], func);
		}
	}
}
