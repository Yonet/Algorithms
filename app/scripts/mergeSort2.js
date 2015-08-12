var mergeArrays = function(arr1, arr2) {
	var result = [];

	if(arr1.length === 0 || arr2.length === 0) {
		return arr1.concat(arr2);
	} else {
		var len = arr1.length + arr2.length;
		var i = 0;
		var j = 0;
		while(result.length < len){
			if(arr1[i] < arr2[j]){
				result.push(arr1[i]);
				i++;
			} else {
				result.push(arr2[j]);
				j++;
			}
		}
	}
	return result;
	
}	