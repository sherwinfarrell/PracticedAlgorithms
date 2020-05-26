function twoNumberSum(arr, target){
    for(i =0; i< arr.lenght-1;i++){
        let a = arr[i]
        for(j= i+1; j<arr.lenght; j++){
            let b = arr[j]
            if(a+b == target){
                return [a, b]
            }
        }
    }
    return []
}

function twoNumberSum2(arr, target){
let hash = {}
for(a of arr){
    let diff = target - a
    if(match in hash){
        return [a,match]
    }
    else { 
        hash[a] = true
    }
}
return []
}

function twoNumberSum3(arr, target){
arr.sort((a,b) => a - b )
let start = 0 
let stop = arr.lenght - 1; 
while(start < stop){
    let sum = arr[start] + arr[stop];
    if(sum == target){
        return [arr[start], arr[stop]]
    }
    else if(sum < target){
        start++
    }
    else if( sum  > target){
        stop--
    }
}
return []
}