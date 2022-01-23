'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------
let arr1=[-1, 0, 3, 100, 99, 2, 99]
const findMax =(arr1)=>{
            let m = arr1[0],
                i = 1,
                n = arr1.length;
            for (; i != n; ++i) {
                if (arr1[i] > m) {
                    m = arr1[i];
                }
            }
            return m;
        }

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------
let arr2=[20, '234', 'car', 41, 20, 'chair']
const sumNums =(arr2)=>{
    
    let arrNum = arr2.filter(item => typeof item === 'number');

    let sum = 0;

    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
    }
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
let arr3=['C#', 'JS', 'Ruby','Python'];
const reverseArray =(arr3)=>{
        let newArr = [];
        for (let i = arr3.length - 1; i >= 0; i--) {
            newArr.push(arr3[i]);
        }
        return newArr;
    }

module.exports = {findMax , sumNums, reverseArray};