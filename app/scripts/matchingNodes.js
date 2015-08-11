// Write a function that takes 3 parameters (rootA, rootB, node). 
// Node is a reference to a node in rootA. 
// RootA and RootB are clones of each other. 
// Write a function that returns a reference to the corresponding node in RootB.
// 
var solution = function(rootA, rootB, node){
	if(rootA.root === node){
		return rootB;
	} else {
		for(var i = 0; i < rootA.children.length; i++){
			return solution(rootA.children[i], rootB.children[i], node);
		}
	}
}

// var A = {
// 	root : 1, 
// 	children: [
// 		{root: 2, children:[
// 				{root: 3, children:[]},
// 				{root: 4, children:[]},
// 			]
// 		},
// 		{root: 6, children:[
// 				{root: 7, children:[]},
// 				{root: 9, children:[]},
// 			]
// 		}
// 	]
// }

// var B = {
// 	root : 6, 
// 	children: [
// 		{root: 5, children:[
// 				{root: 6, children:[]},
// 				{root: 8, children:[]},
// 			]
// 		},
// 		{root: 45, children:[
// 				{root: 57, children:[]},
// 				{root: 96, children:[]},
// 			]
// 		}
// 	]
// }  

// solution(A, B, 2);