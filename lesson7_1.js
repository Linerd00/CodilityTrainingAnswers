/**********************************************************
 	Correctness: 100%, Performance: 80%, Task score: 87%
 	
 	Question: A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

	S is empty;
	S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
	S has the form "VW" where V and W are properly nested strings.
	For example, the string "{[()()]}" is properly nested but "([)()]" is not.
	
	Write a function:
	
	function solution(S);
	
	that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.
	
	For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.
	
	Assume that:
	
	N is an integer within the range [0..200,000];
	string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
	Complexity:
	
	expected worst-case time complexity is O(N);
	expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
	Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 **********************************************************/

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(S == ""){
        return 1    
    }
    
    var str = S
    var max = Math.ceil(S.length/2)
    for(var i = 0; i < max; i++){
    	//reference: expression (x|y), https://www.w3schools.com/js/js_regexp.asp
        str = str.replace(/\(\)|\[\]|\{\}/g, "")
        if(str == ""){
            return 1
        }
    }
    return 0
}