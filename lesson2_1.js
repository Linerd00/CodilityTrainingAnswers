/**********************************************************
 	Correctness: 80%, Performance: 50%, Task score:66%
 	
	Question: 	
 **********************************************************/

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    var unpairedNum = 0
    var map = {}
    
    for(var i = 0; i < A.length; i++){
        if(!map[A[i]]){
            map[A[i]] = 1 
        }else{
            map[A[i]]++
        }
    }
    
    for(var k in map){
        if(map.hasOwnProperty(k) && map[k] == 1){
            unpairedNum = parseInt(k)
            break
        }    
    }
     
    return unpairedNum   
}