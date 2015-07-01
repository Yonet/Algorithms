var uniqStr = function(str){
	for (var i = str.length - 1; i >= 0; i--) {
		if(str.indexOf(str[i]) !== i) return false; 
	};
	return true;
}

// uniqStr('abcde');
// uniqStr('abacde');
