// Given a sorted array [0-99]
// With input: [1, 5, 45, 86]
// Write a function that prints the empty regions, example Output: “0,2-4,6-44,46-85,87-99” 
// 
var solution = function(arr, input){
	var j = 0;
	var result = [];
	for (var i = 0; i < input.length; i++) {
		var start = arr[j];
		var current = arr[j];
		while(arr[j] < input[i]){
			j++;
		}
		if(current < input[i] - 1){
			current = current + '-' + arr[j-1];
		}
		result.push(current);
		j++;
	};
	if(input[input.length - 1] < arr[arr.length - 1]){
		var current = arr[input[input.length - 1] + 1] + '-' + arr[arr.length - 1];
		result.push(current);
	}
	return result.join(',');
}

var arr = function(){
	result = [];
	for (var i = 0; i < 100; i++){
		result.push(i);
	}
	return result;
};

var array = arr();

solution(array, [1, 5, 45, 86])