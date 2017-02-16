/**********************************************************
 	https://codility.com/programmers/lessons/1-iterations/
 	
 	Correctness: 100%, Performance: 100%, Task score:100%
 	
 	Question:
 	A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
	
	For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.
	
	Write a function:
	
	int solution(int N);
	that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
	
	For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
	
	Assume that:
	
	N is an integer within the range [1..2,147,483,647].
	Complexity:
	
	expected worst-case time complexity is O(log(N));
	expected worst-case space complexity is O(1).
	Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 **********************************************************/

function solution(A){
	// write your code in JavaScript (Node.js 6.4.0)
	
    var sum
    var sum_left = 0
    var sum_right

    if(!A || A.length == 0){
        return -1
    }else if(A.length == 1){
        sum = A[0]
    }else{
        sum = A.reduce(function(total, num){ return total + num })
    }

    for(var i = 0; i < A.length; i++){
        sum_right = sum - sum_left - A[i]
        if(sum_left == sum_right){ return i }
        sum_left += A[i]
    }

    return -1
}