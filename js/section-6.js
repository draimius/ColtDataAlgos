'use strict'
console.log('section-6')

//Challanges for practice:
//Frequency counter - write a function calld samefrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

let samefrequency = function (a, b) {
    let obj1 = {}
    let obj2 = {}
    a = String(a).split('')
    b = String(b).split('')
    if (a.length !== b.length) {
        console.log(false)
        return false
    }
    for (let i = 0; i < a.length; i++) {
        obj1[a[i]] = (obj1[a[i]] || 0) + 1
        console.log(obj1)
    }
    for (let i = 0; i < b.length; i++) {
        obj2[b[i]] = (obj2[b[i]] || 0) + 1
        console.log(obj2)

    }
    for (let item in obj1) {
        if (obj1[item] !== obj2[item]) {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}



// samefrequency(182, 281)
// samefrequency(34, 14)
// samefrequency(3589578, 5879385)
// samefrequency(22, 222)

// ----------------------------------------------------------------------------------------------------------------------------------------------

//Frequency counter/ Multiple Pointers - write function called, areThereDuplicates which axxepts a variable nmber of arguments, and checiks whether 
//--there are any duplicate among the arguments passed in. You san solve this using the frequency counter pattern or the multiple pointers pattern

let areThereDuplicates = function () {
    let obj = {}
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        obj[arguments[i]] = (obj[arguments[i]] || 0) + 1
        console.log(obj)
        if (obj[arguments[i]] > 1) {
            console.log(true)
            return true
        }
    }
    console.log(false)
    return false

}

//learned something new there for variable/dynamic argument where we dont know how many will actually be passed in
//we can use actual arguments. can pull its length and each of its value/element pretty darn awsome
//learned also that the arguments tag can be looped/initiated as a array or a object

// areThereDuplicates(1, 2, 3)
// areThereDuplicates(1, 2, 2)
// areThereDuplicates('a', 'b', 'c', 'a')

// ----------------------------------------------------------------------------------------------------------------------------------------------

//Multiple pointers - avarage pair: write a function called averagePair. Given a sorted array of integers and a target average, determine if there
//--is a pair of values in the array where the avarage of the pair equals the target avarage. There may be more than one pair that matches the average
//---target.

let averagePair = function (arr, n) {
    // console.log(arr, n)
    let left = 0
    let right = arr.length - 1
    for (let i = 0; i < arr.length; i++) {//use while loop instead (why?)
        let sum = (arr[left] + arr[right]) / 2
        // console.log(sum)
        if (sum < n) {
            left++
        }
        else if (sum > n) {
            right--
        }
        else if (sum == n) {
            console.log(true)
            return true
        }
    }
    console.log(false)
    return false
}

//note array is sorted for a reason and speaking of all possible pair not just sequence


// averagePair([1, 2, 3], 2.5) //true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) //true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) //false
// averagePair([], 4) //false


// ----------------------------------------------------------------------------------------------------------------------------------------------

//miltiple pointers - isSubsequence: function which takes in two strngs and check whether the characters in th first string form a subsequence of
//--characters in the second string. In other words, the funcion should check whether the characters in the first string appear somewhere in the second
//---key without their order changing(exist in original sequence)

let isSubsequence = function (str, str2) {
    // console.log(str, str2)
    let count = str.length
    let j = 0
    for (let i = 0; i < str2.length; i++) {
        console.log(str[j], str2[i])
        if (str[j] == str2[i]) {
            j++
            count--
        }
        console.log(count)
        if (!count) {
            console.log(true)
            return true
        }
    }
    console.log(false)
    return false
}

//plan
// j = str2.length { i++}
//its only looking forward dosent care if theres stuff inbetween holds letter tell match then moves up one and looks again if exist
//could have substring used for comparision or a count var if greater than 1 then we now match somewhere
//want the match not to rely on matching index across strings
//look for first char in str2 then continue moving through string on both is str continue move through index if still and we reach end of str true else false
//not sorted 


// isSubsequence('hello', 'hello world') //true
// isSubsequence('sing', 'sthgibnaag') //true
// isSubsequence('abc', 'abracadabra') //true
// isSubsequence('abc', 'acb') //false due to order




// ----------------------------------------------------------------------------------------------------------------------------------------------

//sliding Window - maxSubarraySum: given an array of int's and a number, write fucntion which finds the maximum sum of a subarray withthe length of the 
//--number passed to the function. *(note subarray must consist of consecutive elements from the original array, again maintain original order) 

let maxSubarraySum = function (arr, n) {
    if (n > arr.length) {
        return null
    }
    let currentSum = 0
    let maxSum = 0
    for (let i = 0; i < n; i++) {
        currentSum += arr[i]
    }

    for (let i = n; i < arr.length; i++) {
        currentSum = (currentSum + arr[i]) - arr[i - n]
        maxSum = (maxSum > currentSum) ? maxSum : currentSum
    }
    return maxSum
}




// maxSubarraySum([100, 200, 300, 400], 2) //700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) //39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) //5
// maxSubarraySum([3, -2, -7, -4, 1, -1, 4, -2, 1], 2) //5
// maxSubarraySum([2, 3], 3) //null

//---------------------
//Colt solution
// function maxSubarraySum(arr, num) {
//     if (arr.length < num) return null;

//     let total = 0;
//     for (let i = 0; i < num; i++) {
//         total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//         currentTotal += arr[i] - arr[i - num];
//         total = Math.max(total, currentTotal);
//     }
//     return total;
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------
// --------------Review Sliding Window---------------------------------------------------------------------------------------------------------------------

//Sliding Window - minSubArrayLen: function which accepts two paprameters, array of positive int's and a positive int.
//--function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
//---if there isn't one , return  0 - instead (subarray that equals or it greater than the int passed in wether that one value or several)
//-----only realy constraint is that they must be sequential

let minSubArrayLen = function (arr, n) {
    let start = 0 //controls the loops starting point
    let loop = 0 //
    let end = arr.length - 1
    let currentSum = 0
    let minLength = 0
    let finalLength = arr.length
    let check = false
    while (start <= end) {


        //short circut in event that any individual element is equal or greater than n
        if (arr[loop] >= n) {
            finalLength = 1
            break
        }

        //keeps track of all array combination sums
        currentSum += arr[loop]
        // console.log(arr[loop])
        // console.log(currentSum)

        //param checking when any array sum equal or is greater than n
        if (currentSum >= n) {
            //check for the lowest length becomes finalLength to be returned
            finalLength = (finalLength < minLength) ? finalLength : minLength
            check = true
        }


        //param creates the looping through whole array once reaches end restarts till every combination evaluated
        if (loop == end) {
            //serves to increament the starting point of the loop
            start++
            //sets the starting index for loop (moves it up one )
            loop = start - 1
            //sets the current sum used to check array sums, reset every new loop , new starting point
            currentSum = 0
            //reset the minLength every new loop of array, also serves as a temp holder of the length to pass onto the final length
            minLength = 0

            //param check if no sum was ever = or greater than n aka not possible to produce with array provided
            if (!check) {
                finalLength = 0
            }

        }

        //keeps track of iterations in each new loop
        minLength++
        //constanct increment to loop through all array combinations
        loop++
    }
    console.log(finalLength + '')
    return finalLength

}


//THERE 100% BETTER WAY TO DO THIS USE I BELIEVE TOO MANY VARIABLE ASSIGNED BUT WORKS AND I UNDERSTAND IT (so we learn and better it)
//the i is an outside index incremented only when we reach the end of the array (otherwise remains where its at) - this is whats actually moving up in array
//start is the one moving across the whole array adding continuesly to the current sum 
//end serve as a check that strat is at the stoping point if match (then we increment i)
//--sue was that as the i moved up start no londer reached end becuase the availible length to travel had been cut by one each time



//need on outside var to move up starting index, and i gues  some type var to know when   (based on start but only increments when i = end)
//WE CAN NOT SORT IT AS IT MUST BE IN THE ORIGINAL ORDER THAT WE FIND THE SUM MATCHES!!!!

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) //2
// minSubArrayLen([2, 1, 6, 5, 4], 9) //2
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) //1
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) //3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) //5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) //2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) //0

//similar to above but here the number of value can use to meet int wanted is not limited simply represent the number we want to achieve
//does its serve any purpose to sort these array (adding has to be everything inbetween, loop on a slice of array that we can change)
//will will start from 0 index then add if we gothrough the whole array and no match then index moves up one and start from 1 then again through whole thing
//--if go through whole array no match then again move index up one then again and again till index reaches end (nothing found return false )
//---if somehting found to match we hold that in var for time being if any other match then we compare thier length if  less then replace it else dont
//----another check is if at any time there is a single value thats greater than int wanted auto return that as true as cant get shorter then one
//plan : now quensiton is how do we travers this to produce said actions , what are the thing we need to keep track of and work together or seperate

//Colt Solution******
function minSubArrayLen2(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    //this i dont completely understand (in mine i used array length as max posibiliy would be the whole array it self no larger)

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        //continure to increase window as long as sum is less then n and has not reached end of array
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= sum) {
            //why end - start higher index minus lower but why return that? (guess difference does give you that length used to meet sum)
            minLen = Math.min(minLen, end - start);
            //why decrement by this? its constently creating new window where add new pair and removes previous to give all combos
            total -= nums[start];
            //we shrink starting point of window
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
//end provides the lenght which is why we subtract start and the start of the window want the difference
//focused more on getting to num = larger vs going through every combo (though still does that)
//start only moves when we reach a number = or larger than wanted aka the start of the window where summing 
//and we only remove the previous element from sum when its larger or = to num wanted
//and the final else simply serves as a break basically meaning is not greater or = to num and its not end point of window is no longer sharter than full length
//

//used much fewer variables declared
//he took the approuch of progressvely increasing the window lengh while in mine i shrunk it
//also dosent use any param to really stop the loop , uses the absence of param being met the stop looping
//

// ----------------------------------------------------------------------------------------------------------------------------------------------

//Sliding Window - findLongestSubstring: write function which accepts a string and returns the length of the longest substrng with all unique characters
//looked at solution*****
//Colts solution
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // console.log(char)
        console.log(seen[char])
        if (seen[char]) {
            //seen[char] would provide its length to them be removed fro the calc of logest 
            //start used because must stay same value unless like here something is triggered to them effect longest calculation
            start = Math.max(start, seen[char]);
            //start cahnges to the value/index/length of where it last appearecnce was made 
        }
        // index - beginning of substring + 1 (to include current in count)
        // start represent its elemnts last apperence in the string remove to eliminate from that value and back to calc correct longest non repeat string
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
        // console.log(seen[char])
        // console.log(start)

        console.log(seen);
    }
    console.log(longest);
    return longest;
}
//WHY DOES IT WORK?? (basically how long can it go till one actually exist gets passed throught to change the start point fo window)
// 00staert becomes the poirtion removed from the new windows count 
//interesting note is that instead of using the i/index as the key does the reverse where the elemtn is the key and index/length value
//uses the fact that it dosent exist yet as way to move through and only if it already does and passed in again does window change
//--and changes by the amount/length/index of its previosly logged elemnet as to calculate correct length of new string

//what if i continuesly add to a sub string checking for repeats start from 0 but when ever we reach a repeat
//if reach repeat we reset start point become loop currect value aka where hit repeat and we move forward from there again 
//we only reset/edit window when reach repeat or substring length = the original string lenght match 
//then like before we have a temp that hold length to check and have final in seperate one where we eveal for the largest number

// change substring while also looping through origianl?? but why ???


//can take str pull to object with index as eky
//how can i continuesly create a substring and check also check for any char that appears more than once


//input we have as a string and we want to output a number representing the length of the longest 
//not how do we do that? what variable do i need to keep track of? how do we need the data to be structured?
//--and what in plain english step by step process best to get to our output
//do we need to know how many times it appears i dont think so we can 


//need to do same as above only and go through every combination 
// we move up the initial starting index : when either we've gone through the whole string length OR we run into a repeat 


//if char dosent exist in index

// findLongestSubstring('')  //0
// findLongestSubstring('rithmschool')  //7
// findLongestSubstring('thisisawesome')  //6
// findLongestSubstring('thecatinthehat')  //7
// findLongestSubstring('bbbbbb')  //1
// findLongestSubstring('longestsubstring')  //8
// findLongestSubstring('thisishowwedoit')  //6


// me rewiting the 

let find = function (str) {
    let start = 0
    let maxLength = 0
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        //used the fact that it dosent exist yet so if it does then we adjust the starting point to measure form
        if (obj[char]) {
            start = (start > obj[char]) ? start : obj[char]
        }
        //start is soley changes to test for the longest str nothing else
        maxLength = (maxLength > (i - start + 1)) ? maxLength : (i - start + 1)

        //this is incrementing key value pair showing ist element and length up to the char including it
        obj[char] = i + 1

    }

    console.log(maxLength)
    return maxLength
}
//it doesnt matter that the value of h changes what matters is that it existed prior to then change the start point and calc str now from different start
//-- point then before


find('rithmschool')  //7






//What Important is not memorising the code or number of loop and varible or type 
// What important here is to understand the logic behing the actual algorithm and each one of its steps
// why we choose to declare a variable and what value to give it 
// what and the thing that we need to track and how to they interact with eachother to achieve our desired results
// the logic the step by step on how to solve the challange at hand