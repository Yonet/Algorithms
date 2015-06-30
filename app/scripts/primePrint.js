// “print out all prime numbers in a given string. abc2134kd31 -> 2, 13, 3, 3”
var primePrint = function(str){
	var primes = [];
	var results = [];
	var strs = str.split('');
	var isPrime = function(num){
		var div = 2;
		if(primes.indexOf(num) > -1) {
			return true;
		} 
		while (num >= div) {

			if(num === div) {
				primes.push(num);
				return true;
			}
			else if(num % div === 0){
				return false;
			} else {
				div++;
			}
		}
	}

	for(var i = 0; i < strs.length; i++){
		if(parseInt(strs[i])) {
			var current = '';
			var diff = 0;
			while(parseInt(str[i + diff])) {
				current = parseInt(current + str[i + diff]);
				if(isPrime(current)){
					results.push(current);
				}
				diff++;
			}
		}
	}
	return results;
}

primePrint('abc2134kd31');