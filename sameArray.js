function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i =0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // console.log(correctIndex)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex, 1)
        console.log(arr2)
    }
}

same([2,3,6], [9,4,36])