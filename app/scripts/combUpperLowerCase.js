// find all the combinations of a string in lowercase and   uppercase. For example, string "ab" -&gt; "ab", "Ab", "aB", "AB". So, you will have 2^n (n = number of chars in the string) output strings. The goal is for you to test each of these string and see if it match a hidden string. 

var x = function (carStr, currIndex, result) { //"abc", 0, ""
	if (currIndex >= carStr.length) { console.log(result); } 
	else { 
		var index = currIndex;
		var lowerCase = result + carStr[index]; //a
		var uperCase = result + carStr[index].toUpperCase();//A
		console.log(lowerCase, uperCase); 
		x(carStr, index + 1, lowerCase); 
		x(carStr, index + 1, uperCase); 
	} 
}; 

x("abc", 0, "");