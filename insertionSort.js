function insertionSort(arr){
    for(let i =1; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp;
                // [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }else{
                break;
            }
        }
    }
    return arr;
}


console.log(insertionSort([2,34,-21,4]))