// Longest increasing sequence in an Array.

var solution = function(arr){
	var longSq;
	var sq = [arr[0]];
	var longest = 1;
	for(var i = 1; i < arr.length; i++){
		if(arr[i] === arr[i - 1] + 1){
			sq.push(arr[i]);
			// if(sq.length > longest) longest = sq.length;
		} else {
			if(longest < sq.length) {
				longest = sq.length;
				longSq = sq;
			}
			sq = [arr[i]];
		}
	}
	return longSq;
}

solution([3, 2, 3, 4, 8, 6, 7, 8, 9, 10, 0]);
solution([3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2]);