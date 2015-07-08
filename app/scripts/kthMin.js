// Given two sorted arrays, find the kth minimum element of both.
// 

var solution = function(arr1, arr2, k){
	var intersection = [];
	while(k > intersection.length){
		for(var i = 0; i < arr1.length; i++){
			if(arr2.indexOf(arr1[i]) > -1) intersection.push(arr1[i]);
		}
	}
	return intersection[k-1] || -1;
};

// solution([0, 3, 5, 6, 7, 8], [1, 2, 5, 8, 9], 2);