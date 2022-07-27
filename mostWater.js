
function maxArea(heights){

    let totalWater = 0;

    for(let i = 0 ; i < heights.length; i++){
        for(let j = i+1; j < heights.length; j++){
            // console.log(i, j)
            let height = Math.min(heights[i], heights[j]);

            // if(heights[i] > heights[j]){
            //     height = heights[j]
            // }else{
            //     height = heights[i]
            // }
            
            // console.log(i, j)
            // console.log(height)
            let width = j - 1;

            let currentWater = height * width;
            
            // if(totalWater < currentWater){
            //     totalWater = currentWater;
            // }
            totalWater = Math.max(currentWater, totalWater)
        }
    }
    return totalWater;
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))