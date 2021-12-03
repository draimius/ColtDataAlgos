'use strict'
console.log('section-5')

// How do you improve?
// 1.devise a plan for solving problems - that's what lest section was about
// 2.master common problem solvig patterns - what this section is about
// there are common patters that occur that serve as a frame work, but are not awnser to all challanges

// Some patterns:(different approches to solving problem)
// frequency counter 
// multiple pointers 
// sliding window 
// divide and conquer
// dynamic programming
// greedy algorithms
// backtracking and ect..

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Frequency counter: use object to collect values and thier frequencies
// comparing pieces of data, ect..

//write a function called same, which accepts two arrays. The function should return true if every value in the array has its'd corresponding value squared in 
//---the second array. the frequency of calues must be the same
// my words: write function takes two array and returns true if all first array values appears in the second array squared as well as appears in the same frequency
// -----across both arrays (note order does not matter only corresponding values and frequency)
//ex.
// same([1,2,3], [4,1,9]) = true
// same([1,2,3], [1,9]) = false
// same([1,2,3], [4,4,9]) = false
// ------------------------------------------------

// My Solution: 

// let same = function (arr, arr2) {
//     if (arr.length !== arr2.length) {
//         console.log(false)
//         return false
//     }
//     arr = arr.sort((a, b) => a - b)
//     arr2 = arr2.sort((a, b) => a - b)

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr2[i], arr[i] ** 2)
//         if (arr2[i] !== arr[i] ** 2) {
//             console.log(false)
//             return false
//         }
//     }
//     console.log(true)
//     return true
// }


// same([1, 2, 3, 3, 3], [4, 1, 1, 1, 12])
// same([1, 2, 3, 3], [4, 1, 9, 1])
// same([1, 2, 3, 3], [4, 1, 9, 9, 9])
// same([1, 2, 3, 3], [4, 1, 9, 9])

// ------------------------------------------------
//Colt naive algo was nested loop 
// -and second more effective algo consist of short circut like our then two object and two seperate loops 
// --where the value and frequencies for each value where added to correcpoiding object
// ---then complared same key's frequency if they didnt match return false otherwise return true 
// i'd say very similar to our algo not sure which more effective , maybe his since adding, accesing object is constant time
// -so O(n) seperate loops 
// while in mine there is no adding or creating other data structure could say actually was with the sort
// -where for that to happend sure things were added and remove to return that google method return O(nlog n) so bit slower
// --if true though like the look and logic in mine better bias ofcourse but his also very striaght forward and simple really
//Colt solution:

// function same(arr, arr2) {
//     if (arr.length !== arr2.length) {
//         console.log(false)
//         return false
//     }
//     let counter = {}
//     let counter2 = {}
//     for (let val of arr) {
//         counter[val] = (counter[val] || 0) + 1
//     }

//     for (let val of arr2) {
//         counter2[val] = (counter2[val] || 0) + 1
//     }

//     for (let key in counter) {
//         if (!(key ** 2 in counter2)) {
//             console.log(false)
//             return false
//         }

//         if (counter2[key ** 2] !== counter[key]) {
//             console.log(false)
//             return false
//         }
//     }
//     console.log(true)
//     return true
// }


// frequency Counter -  usually use object to construct a profile and break down the content of an array or string, then conpare

// ----------------------------------------------------------------------------------------------------------------------------------------------

//Frequency Counter challange - Anagram

// let validAnagram = function (str, str1) {
//     // console.log(str, str1)
//     if (str.length !== str1.length) {
//         console.log(false)
//         return false
//     }
//     let word = {}
//     let word2 = {}

//     for (let char of str) {
//         word[char] = (word[char] || 0) + 1
//     }
//     for (let char of str1) {
//         word2[char] = (word2[char] || 0) + 1
//     }
//     for (let key in word) {

//         if (word[key] !== word2[key]) {
//             console.log(false)
//             return false
//         }
//     }
//     console.log(true)
//     return true
// }

//solution v2 - zero out 
//pretty darn cool solution one increments other decrements so if cancel eachother out the frequency in same else not and false
//this solution only uses one object vs two 

// let validAnagram = function (str, str1) {
//     if (str.length !== str1.length) {
//         console.log(false)
//         return false
//     }
//     let lookUp = {}
//     for (let char of str) {
//         lookUp[char] = (lookUp[char] || 0) + 1
//     }
//     for (let char of str1) {
//         lookUp[char] = (lookUp[char] || 0) - 1
//     }
//     for (let key in lookUp) {
//         if (lookUp[key]) {
//             console.log(false)
//             return false
//         }
//     }
//     console.log(true)
//     return true

// }
// one reason to not rely on the sort function though good and has its use ofcourse
// (but in event like this when dealing with diff structure, sort only works on array so either has to be the input or you have to convert it to a array)
// --and converting isn't hard nor take lot time its a uneeded step if we simply stick to utilizing onbject in this case

//colt solution:
// let validAnagram = function (first, second) {
//     if (first.length !== second.length) {
//         console.log(false)
//         return false
//     }
//     let lookUp = {}

//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i]
//         lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1
//     }
//     //looping check's are great
//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i]
//         if (!lookUp[letter]) {//this is checking the first string if the current char exist in other else return false otherwise continues decrement
//             console.log(false)
//             return false
//         } else {
//             lookUp[letter -= 1]
//         }
//     }
//     console.log(true)
//     return true
// }

//very similar to v2 loops still used to add to a object
//notice and good right to have a check in the loop its self for something like this
//you dont want to do more work then is nessesary ever, the check in loops allows to check every value 
//where if at any point loop avaluation value meet said param end right there no need to go through the rest if we already know its false
//it short circuting, imagina working with billion value makes huge difference having that then 
//---having to regardless of values go through each billion , then go through again now to look for disqualifing value 
//----when you could have do it in the first place and prevented havintg to go through the whole billion when it wasn't needed

// validAnagram('rat', 'car') //false
// validAnagram('awesome', 'awesom') //false
// validAnagram('aazw', 'zzae') //false
// validAnagram('', '') // true
// validAnagram('anagram', 'nagaram') // true
// validAnagram('qwerty', 'qeywrt') //true
// validAnagram('texttwisttime', 'timetwisttext') // true


// ----------------------------------------------------------------------------------------------------------------------------------------------

//Multiple pointers: 
//creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
//--based on a certain condition, very eff8icent for solving problems with minimal space complexity as well

//have a pointer(var looking at location or index)

//example - write a finction called sumZero which accepts a sorted array of ints. the funtion should find the first pair where the sum is = 0
//---return an array that includes both values that sum to zaro or undefined if a pair does not exist

// let sumZero = function (sortedArr) {
//     //whats the easiest way to get to zero cancel one number one positive and one negative 
//     //what other ways can we get 0 to equalize is the only way \
//     //loop thorugh array for each value pulled we check if its invers exist in the array that what we are looking for the int inverse 
//     for (let num of sortedArr) {
//         let test
//         if (num > 0) {
//             test = (-num)
//         }
//         if (num < 0) {
//             test = (num)
//         }
//         if (!sortedArr.includes(test)) {
//             console.log(false)
//             return false
//         }
//     }
// }

//first version no bueno though gave me idea to develop this solution
//used two seperate var to represent index in the array working from each end working it way to the center
//evaluation based movement check if great or less the then increamented appropriate index var to move to the next value 
//also notice i use the -of original value to make = comparison/also becuase thats the value im looking for
//based on that got a hint as to if nuber needed to equal zero would exist further in the array or if should increment other and attempt with new value
// let sumZero = function (sortedArr) {
//     let i = 0
//     let j = sortedArr.length - 1
//     for (let k = 1; k < sortedArr.length; k++) {
//         if ((sortedArr[i] + sortedArr[j]) == 0) {
//             console.log(sortedArr[i], sortedArr[j])
//             // console.log(true)
//             return true
//         }
//         if (-(sortedArr[i]) > sortedArr[j]) {
//             i++
//         }

//         if (-(sortedArr[i]) < sortedArr[j]) {
//             j--
//         }
//         if (j == i) {//if at same index mean para never met for = 0 so not possible and return undefined
//             console.log(undefined)
//             return undefined
//         }
//     }
//     console.log(undefined)
//     return undefined
// }

//My final Solution - same as above but replaced some if with ternary op for index movement and change para for =0 to boolean for false
//time complexity O(n) - linear
//space complexity O(1) - constant

// let sumZero = function (sortedArr) {
//     let front = 0
//     let back = sortedArr.length - 1
//     for (let i = 1; i < sortedArr.length; i++) {
//         if (!(sortedArr[front] + sortedArr[back])) {
//             console.log(sortedArr[front], sortedArr[back])
//             return true
//         }
//         (-(sortedArr[front]) < sortedArr[back]) ? back-- : front++
//         if (back == front) {
//             console.log(undefined)
//             return undefined
//         }
//     }
//     console.log(undefined)
//     return undefined
// }

//proud of solution never done something like it and came up with on own noice (hints fron it being sorted(why sorted?) and multiple pointer(why called that?))

// sumZero([-3, -2, -1, 0, 1, 2, 4]) //[-2, 2]
// sumZero([-3, -2, -1, 0, 1, 2]) //[-2, 2]
// sumZero([-3, -2, -1, 0, 1, 2, 3]) //[-3.3]
// sumZero([0, 0, 1, 2, 3,]) //[0, 0]
// sumZero([-2, 0, 1, 3]) //undefined
// sumZero([1, 2, 3,]) //undefined
// sumZero([]) //undefined

// ------------------------------------------------

//Colts Solution
//his version exaiing instead of comparing the actual value in the front to the back, he compares there sum to 0 
//--where if their sum in greater than 0 then we would --j and if its less than 0 we ++i 
//---basically same just basing it on diff value though the same idea
let sumZero = function (arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum == 0) {
            console.log(arr[left], arr[right])
            return true
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

//like the use of while loop as in mine really didnt use loop for anything other than to iterate so good there
//--while also eliminated the param for if indexes = each other as while loop para would never allow that to occur
// also like that used the sum and 0 for param 
// like also the use if elseif then else could be seperate though not neccesary
// over all similar this just bit different and say more proper

// ----------------------------------------------------------------------------------------------------------------------------------------------

// multiple Pointers Challenge: count Unique Value
//--implement a function called countUniqueValues, which accepts a sorted arrray, and counts the unique values in the array. 
//---There can be nagative numbers in the array, but it will always be sorted.

//My solution :
//this would be best if you actually needed the array of unique , else if only count think below is better space wise
//time complexity O(n) - linear
//space complexity believe is also O(n) linear as creating new arr/set
// let countUniqueValues = function (sortedArr) {
//     sortedArr = [...new Set(sortedArr)]
//     console.log(sortedArr.length)
// }

//My Solution without set:
//time complexity is O(n) - linear
//space complexity is O(1) - constant

let countUniqueValues = function (sortedArr) {
    let count = 0
    let j = -1
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[j]) {
            count++
        }
        j++
    }
    console.log(count)
}

// countUniqueValues([1, 1, 1, 1, 1, 2]) //2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 7, 12, 12, 13]) //7
// countUniqueValues([]) //0
// countUniqueValues([-2, -1, -1, 0, 1]) //4

// ------------------------------------------------

//Colt Solution
// let countUniqueValues = function (arr) {
//     let i = 0
//     for (let j = 1; j < sortedArr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++
//             arr[i] = arr[j]
//         }
//     }
// }
// i dont thing this is best way to go about it unless ask specified to have to arr become the set
//--because we learned that editing an array anywhere but the end is less efficient and linear vs remove/add at back is constant 
//---by that we never really want to rearrange array unless asked to also we dont need array only the count so dont really need on anyway(though for exanple right just my thoughts)
//differnt is also i have a count var while he does not though i also dont manipulate any arrays so just diff (thnk just better have seperate var constant then edit arr linear)


// ----------------------------------------------------------------------------------------------------------------------------------------------

//Sliding Window Pattern: pattern includes creating a window which can either be an array or number from one position to another
//--depending on a certain condition, the window either increases or closes and a new window is created
//---very useful for keeping track of a subset of dete in an array/string etc.

//example: write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum
//--sum of n consecutive elements in the array. 

// let maxSubarraySum = function (arr, n) {
//     console.log(arr, n)
//     // let start = 0
//     let maxSum = 0
//     let start = 0
//         let subArr = arr.slice(start, end)
//         console.log(subArr)
// let sum = subArr.reduce(function (a, b) {
//     return a + b
//         })
//         console.log(sum)
//         maxSum = (maxSum > sum) ? maxSum : sum
//         start++
//     }
//     console.log(maxSum)

//     //use an object to store sum 

// }
//not fan of this solution because of the use of reduce() method in esense is a loop then inside loop so O(n^2) which is not acceptable (nested loop not cool)
//thinking will need lmultiple pointer as well as a hold var that keeps track of highest sum and param checking if any greater is produced
//thinking will at least need one loop 
//use the loop to go through the slice 

//My Solution without reduce: 
//time complexity O(n)
//space complexity O(n)
//first loop calculated the sum of the number in the first window thats then used to caluate the sum of all other windows then just para to hold max and return it 
//notice first loop only does till the length of window wanted and second starts at window size till the actual length of the array

// let maxSubarraySum = function (arr, n) {
//     let previousSum = 0
//     let maxSum = null
//     for (let i = 0; i < n; i++) {
//         previousSum += arr[i]
//     }
//     for (let j = n; j < arr.length; j++) {
//         previousSum = (arr[j] + previousSum) - arr[j - n]
//         maxSum = (maxSum > previousSum) ? maxSum : previousSum
//     }
//     console.log(maxSum)
// }

//kinda cheted looked up but learned regardless look to the math bruv will usually help lots (instead of looping do the math simple)
//big thing is how do we create a dynamic window? can use slice that will do it
//--then becomes how do we creat multiple slices and 
//idea ppush all to object every loop through  then use sums to get the sum of window wanted 
//but would we have to loop through that also for checking params now or have it happend while its looping checking every new sum
//multiple array and deconstruxt no cuase again wouldnt be dynaic prewrite how many elements in sum (sum based on length)
// ------------------------------------------------

//Colt's Solution:
let maxSubarraySum = function (arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.lendth < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    console.log(maxSum)
}
//i dont see point in having tempsum =maxsum there as it gets reassigned anyways so could do without it i think also prefer my ternary to math.max
//--aside from that idea very much the same in getter the max using the previous sum of window from initial
//for this patter use the actual math vs a datastructure or specified steps (really took advantage of the maths)
//like the initial short circut where if wants window langer than array well not possible so return null (i didint really think about that)

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //17
// maxSubarraySum([4, 2, 1, 6], 1) //6
// maxSubarraySum([4, 2, 1, 6, 2], 4) //13
// maxSubarraySum([], 4) //null
// maxSubarraySum([1, 2, 3], 0) //dont know


// ----------------------------------------------------------------------------------------------------------------------------------------------

//Divide and Conquer: this pattern incolves dividing a date set into smaller chinks and then repeating a process with sa subset of date.
//--this pattern can trmendously decrease time complexity

//binary search
let mySearch = function (arr, n) {
    let min = 0
    let max = arr.length - 1
    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        if (arr[middle] < n) {
            min = middle + 1
        }
        else if (arr[middle] > n) {
            max = middle - 1

        }
        else { return middle }
    }
    return -1
}
// console.log(mySearch([1, 2, 3, 4, 5, 6, 7], 4))
// console.log(mySearch([1, 2, 3, 4, 5, 6], 6))
console.log(mySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1))
// console.log(mySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20], 2))
// mySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 12)
// mySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 211)



// ----------------------------------------------------------------------------------------------------------------------------------------------


















