/**********************************************************
 	Correctness: 100%, Performance: 100%, Task score: 100%
 	
	Question: 
 **********************************************************/

function solution(N, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    var counters = []
    var setAll = false
    var setAllValue = 0
    var max = 0
    for(var i = 0; i < A.length; i++){  //O(M)
        if(A[i] >= 1 && A[i] <= N){
            if(!setAll){
                if(!counters[A[i] - 1]){
                    counters[A[i] - 1] = 1
                }else{
                    counters[A[i] - 1]++
                }
            }else{  //when setAll is true, replace the value to setAllValue + 1
                if(!counters[A[i] - 1] || counters[A[i] - 1] < setAllValue){
                    counters[A[i] - 1] = setAllValue + 1
                }else{
                    counters[A[i] - 1]++   
                }
            }
            
            if(max < counters[A[i] - 1]){
                max = counters[A[i] - 1]
            }
        }else if(A[i] == N + 1){
            setAll = true
            setAllValue = max   //record current max value
        }
        
        // console.log("counters=" + counters)
    }
    
    for(var i = 0; i < N; i++){ //O(N)
        if(!counters[i] || counters[i] < setAllValue){
            counters[i] = setAllValue	//if setAll, got setAllValue, else setAllValue is 0, to fill the empty array elements   
        }
    }
    
    return counters
}