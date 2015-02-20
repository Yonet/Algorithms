var insertionSort = function(arr){
	//length of the array
	var len = arr.length;
	// if there is only one element in the array, return the array
	if (len === 1) return arr;
	//for each element check the one before where it belongs and shift the rest.
	else if(len > 2) {
		var newArr = [arr[0]];
		for(var i = 1; i < len; i++) {
			// debugger;
			var j = i;
			while(j > 0) {
				if(newArr[j-1] > arr[i]) {
					newArr[j] = newArr[j-1];
					newArr[j-1] = arr[i];
					j--;
				} else if (newArr[j-1] < arr[i]){
					newArr[j] = arr[i];
					j = 0;
				} 
			}
		}
		return newArr;
	}
}