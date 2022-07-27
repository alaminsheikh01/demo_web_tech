
// function countDown(n){
//     for(let i =n; i > 0; i--){
//         console.log(i)
//     }
// }


// function countDown(n){
//     console.log(n)
//     n--;
//     if(n > 0){
//         countDown(n)
//     }
// }

//countDown(5)


// function sumOfNumber(n){
//     let sum = 0;
//     for(let i = n; i >=0; i--){
//         sum+= i;
//     }
//     return sum;
// }


// function sumOfNumber(n){
//     if(n < 0) return 0;

//     return n + sumOfNumber(n - 1)
// }


// console.log(sumOfNumber(10))

// function sumOfArray(arr){
//     if(arr.length === 0) return 0;

//     const rest = arr.slice(1)
//     return arr[0] + sumOfArray(rest)
// }



// function sumOfArray1(arr){
//     return helperFunc(arr, 0)
// }

// function helperFunc(arr, index){
//     if(arr.length === index) return 0;

//     return arr[index] + helperFunc(arr, index+1)
// }


// let input = new Array(9000).fill(2)

// let start = Date.now()
// console.log(sumOfArray(input))
// let end = Date.now()
// console.log(`time complexity ${end - start} ms`)


// let start1 = Date.now()
// console.log(sumOfArray1(input))
// let end1 = Date.now()
// console.log(`time complexity ${end1 - start1} ms`)



// function findOddNumber(arr){

//     const result = []

//     function helper(input){
//         if(input.length === 0) return 0;
        
//         if(input[0] % 2 != 0){
//             result.push(input[0])
//         }
//         helper(input.slice(1))
//     }

//     helper(arr)

//     return result;
// }


// console.log(findOddNumber([2,3,5,7,3,4,12,32,55,75]))


