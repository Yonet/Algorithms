var romanNumerals = function(str){
	var romans = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
	var num = 0;
	var strs = str.split('');
	for (var i = strs.length - 1; i > 0; i--){
		if(strs[i] === 'V'){
			num +=5;
			i--;
			while(strs[i] === 'I'){
				num--;
			}
		}
	}

	return num;
};

romanNumerals('IV');