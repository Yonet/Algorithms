// bfs
// 
var TreeNode = function(node){
	this.parent = node.parent || null;
	this.children = node.children || null;
};

TreeNode.prototype.isLeaf =  function(node){
	return this.children.length === 0;
}

var bfs = function(node, func){
	var que = [node];

	while(que.length > 0) {
		node = que.shift();
		if(func) {
			func(node);
		}

		if(node.children && node.children.isArray){
			node.children.forEach(function(child){
				que.push(node.children[child]);
			})
		} else {
			for (child in node.children){
				que.push(node.children[child]);
			}
		}
	}
	
	// 
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

// bfs(tree[0], function(node){
// 	node.visited = true;
// 	console.log('node', node);
// })
