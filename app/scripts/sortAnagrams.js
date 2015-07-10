// Wrire a method to sort an array of strings so that all anagrams are next to each other
// 

var solution = function(arr) {
	var hash = {};
	var result = [];
	for (var i = 0; i < arr.length; i++){
		var current = arr[i].split('').sort().join('');
		if(hash[current]) {
			hash[current].push(arr[i]);
		}
		else {
			hash[current] = [arr[i]];
		}
	}
	for(var key in hash) {
		for(var j = 0; j < hash[key].length; j++){
			result.push(hash[key][j]);
		}
	}
	return result;
}

var array = ['ays', 'sds', 'fdfg', 'dsds', 'dfd', 'ddf', 'sya', 'odd', 'gffd', 'dod'];

solution(array);