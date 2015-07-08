// find and output the given number's shortest square sum.
// like input: 12=2^2+2^2+2^2 (not 3^2+1^2+1^2+1^2) output: {2 2 2} 
// 
var highestRoot = function(num){
	return Math.floor(Math.sqrt(num));
};


var solution = function(num){
	var perms = [];
	var highest = {};//size and index
	var startingNum = highestRoot(num);//3
	var calculatePossible = function(){
		var perm = [startingNum];
		var currentTotal = Math.pow(startingNum, 2);//9 10 11
		while(currentTotal < num) {
			var remainder = num - currentTotal; //3 2
			var numToAdd = highestRoot(remainder); //1 1
			currentTotal += Math.pow(numToAdd, 2);//1
			perm.push(numToAdd);//1, 1, 1
		}
		startingNum--;
		perms.push(perm);//[3,1,1,1];
		if(!highest.size || highest.size && highest.size > perm.length) {
			highest.size = perm.length;
			highest.index = perms.length - 1;
		}
	}

	while(startingNum > 0){
		calculatePossible();
	}

	return perms[highest.index];
}

solution(12);