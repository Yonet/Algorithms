// Given a string with only ')' and '(' find if the string is complete or not. If the string is complete means that each open paranthesis should have a corresponding closed one.

// Eg: String s= "((()))()"- Complete String

// String s1=")()()()())))(()()()((" - Incomplete String 
var solution = function(str){
	if(str[0] === ')' || str[str.length -1] === '(') return false;
	var paranthesis = str.split('');
	var opensToClose = 0;
	for(var i = 0; i < paranthesis.length; i++) {
		if(opensToClose < 0) return false;
		if(paranthesis[i] === '(') {
			opensToClose++;
		} else {
			opensToClose--;
		}
	}
	return true;
}

// solution(")()()()())))(()()()((");
// solution("((()))()");
// solution("()()()(((()))))(()()()");