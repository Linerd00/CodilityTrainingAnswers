/**********************************************************
 	Correctness: 50%, Performance: 50%, Task score: 50%
 	
 	I have no idea why it fails the test:
 	A = 11, B = 345, K = 17, WRONG ANSWER got 19 expected 20
 	if it's 20, apparently 11 + 20 * 17 = 351 > 345 
 	
	Question: Write a function:

	function solution(A, B, K);
	
	that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
	
	{ i : A ≤ i ≤ B, i mod K = 0 }
	
	For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
	
	Assume that:
	
	A and B are integers within the range [0..2,000,000,000];
	K is an integer within the range [1..2,000,000,000];
	A ≤ B.
	Complexity:
	
	expected worst-case time complexity is O(1);
	expected worst-case space complexity is O(1).
	Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 **********************************************************/

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    if(A == B){
        return A%K == 0 ? 1 : 0  
    }else{
        return Math.floor((B - A)/K) + (A%K == 0 ? 1 : 0) + (B%K == 0 ? 1 : 0)
    }
}