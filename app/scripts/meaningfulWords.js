 // Given a dictionary, segment a piece of un-spaced text to find meaningful words. e.g "makemytrip"->make my trip
 // 
 
// var dict = {"make": "", "my": "", "trip":"","nice":""};

var solution = function(str){
	var results = [];
	var chars = str.split('');
	for (var i = 0; i < str.length; i++){
		var current = chars[i];//m
		while(dict[current] == undefined){
			i++;
			current = current + chars[i];
		}
		results.push(current);
	}
	return results.join(' ');
}

// solution("makemytripnice");