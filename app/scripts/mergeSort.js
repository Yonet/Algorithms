// You are given two sorted arrays, A and B. A has large enough buffer at the end to hold B. Right a method to merge B into A in sorted order.
// 

var solution = function(A, B){
	
	var indA = 0;
	var indB = 0;
	var temp = [];//3
	var tempInd = 0;
	var len = A.length + B.length;
	while (len > 0){
	
		temp.push(A[indA]);//3
		if(B[indB] < temp[0]) {
			A[indA] = B[indB];//0
			indB++;//1
		} else {
			A[indA] = temp[0];
			temp.shift();
		}

		indA++;
		len--;
	}

	return A; 
}

// var A = [3, 5, 7, 16, 21, 22, 43];
// var B = [4, 5, 10, 12];

// solution(A,B);
