// bfs
// 
var TreeNode = function(node){
	this.parent = node.parent || null;
	this.children = node.children || null;
};

TreeNode.prototype.isLeaf =  function(node){
	return this.children.length === 0;
}

var bfs = function(root, func){
	if (func){
		func(root);
	}
	if(root.children && root.children.isArray){
		root.children.forEach(function(child){
			bfs(root.children[child], func);
		})
	} else {
		for (child in root.children){
			bfs(root.children[child], func);
		}
	}
}



// 
// var tree = {
// 	0: {
// 		value: 0,
// 		children: {
// 			1: {
// 				value: 1,
// 				children: {
// 					2: {
// 						value: 2,
// 						children: {}
// 					}
// 				}
// 			},
// 			3: {
// 				value: 3,
// 				children: {
// 					4: {
// 						value: 4,
// 						children: {
// 							5: {
// 								value: 5,
// 								children: {}
// 							}
// 						}
// 					}

// 				}
// 			},
// 			6: {
// 				value: 6, 
// 				children: {
// 					7: {
// 						value: 7,
// 						children: {}
// 					}
// 				}
// 			}
// 		}
// 	}
// } 


