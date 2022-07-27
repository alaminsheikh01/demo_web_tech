function linearSearch(arr, value){

    for(let i = 0; i<arr.length; i++){
        if(arr[i] == value) return `${i} number of index`;
    }
    return `You have entired wrong input which is ${value}`;
}

console.log(linearSearch([2,3,5,6], 3))