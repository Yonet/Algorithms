function solution(A) {
    var dict = {};
    var count = 0;
    for (var i = 0; i < A.length; i++){
        if(!dict[A[i]]){
            count++;
            dict[A[i]] = 1;
        }
    }
    return count;
}