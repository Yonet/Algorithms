// bfs

var bfs = function(root){
	root.visited = true;

	var visitChildren = function(root){
		if(Object.keys(root.children).length === 0) return;
		for(var key in root.children) {
			root.children[key].visited = true;
		}
		for (var child in root.children) {
			visitChildren(root.children[key]);
		};
		console.log(root);
	}
	visitChildren(root);
}


// 
var tree = {
	0: {
		value: 0,
		children: {
			1: {
				value: 1,
				children: {
					2: {
						value: 1,
						children: {}
					}
				}
			},
			3: {
				value: 3,
				children: {
					4: {
						value: 4,
						children: {
							5: {
								value: 5,
								children: {}
							}
						}
					}

				}
			},
			6: {
				value: 6, 
				children: {
					7: {
						value: 7,
						children: {}
					}
				}
			}
		}
	}
} 

bfs(tree[0]);

var bfsCheck = function(root){
	root.visited = true;

	var findVisited = function(root){
		if(Object.keys(root.children).length === 0) return;
		for(var key in root.children) {
			if(root.children[key].visited === undefined) {
				console.log('not visited', root.children[key]);
				return root.children[key];
			}
		}
		for (var child in root.children) {
			findVisited(root.children[key]);
		};
		// console.log(root);
	}
	findVisited(root);
}
bfsCheck(tree[0]);
