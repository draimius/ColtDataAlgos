'use strict'
console.log('section-17')

//Radix Sort Intro  -   only works for integers(aka whole and positive nums)
// sort is a special sorting algo that works on lists or number
// never makes comparisions between element
// it exploits the fact that indormation about the size of a number in encoded in the number of digits
// --ex. (if a number had 4 digit its large than a number with 2 digits (doesn't matted what the nubers are its true))

//comparison sorts - thats from bubble to mearge sort
// - mean sorting by comparion two item at any given point
//bubble sort - O(n^2)
//insertion sort - O(n^2)
//selection sort - O(n^2)
//quick sort - O(n log(n))
//merge sort - O(n log(n))
// **Best that can be done with a comparison sort id (n log(n))

// But are there faster algorithms???
// -the answer is Yes but not by making comparisons
// -

//There are different algorithms that dont use comparison
//-but instead they exploit some characteristic or attribute of the data to achieve its sorting
//--there are algo specificly for integers where no direct comaprisons are made
//---for example Radix Sort (never directly compars one element to another, instead used parts, or attributes of the values)


// How does radix sort work-
//-its create sort of buckets where it will group ints
//--and check the value in its most right position aka the one's place and groups them based on that
//ex. wehter 22 1002 or 2 becuse their most right number is 2 they get grouped together in the same bucket (not sorting)
//---than using those buckets it forms them back in to a list
//----moving in this example for 0 - 9 we lay out the elemetn stored in each bucket in accending order
//-----all elelments in bucket 0 then 1 then 2 then 3 ect.. and so forth (gives us newly arranged list of int's)
//now we do the same grouping from the start but group by the second most right value (aka digit in ten's place)
//--and those get grouped into corresponding buckets
//ex. 408, 2, 200 all group in the same bucket as ten's place digit is all the same (note that absence of value is treated as a 0)
//and then we return a list from those buckets from 0 to 1 to 2 to 3 and soforth laying out a newly arrayge list
//and we repeats again now grouping using based on the 3rd most right value (aka the 100's place)j
//--we group in bubkets return list using buckets from 0 - 9
//and do it  again till all of the digits end up in the same bucket aka the all dont absente of value in that position
// then we return list once again this time now its fully sorted

// the number of times needed to group and generate newly arrayged list is = to the length of largest number
// --( aka number with greatenst number of digits )
//also extra clarificatin order from bucket should generate list starting from bottom of the bucket to top
//--creating list , we start from bottom of bucket 0 pull all value till pulled last one from top
//----then move onto next bucket same thing pull starting from bottom  and so forth
//--if bucket empty then nothin added and we move to next

//note 10 bucket because of base ten , that can be diff depending what working with like binary ect...




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Radix Sort Helper Method -
//this helper allows us to select the digit withing number passed in, in position wanted (also passed in )

// (allows us to check each value in different number places)
// - function acceptes (num , place) return the digit in num at the given place value
// ---(num) represents just that any number 1, 221243, 34, ect...
// ---(place) represents what position digit in that number we should check/view/focus
// -ex. (1234, 2) return '2'     position go as follow 9876543210 start from right to left starting from 0 and incrementing by 1
//getDigit()

//important as that return is what determines which bucket it gets places in (correct bucket)

//my helper solution
// function getDigit(num, place) {
//     let digit;
//     num = (num + '').split('').reverse()
//     digit = parseInt(num[place])

//     return digit
// }
//thing here is believe that using split and reverse is iquevilante of iterating through it once for spit another for reverse
//--time O(n) so not terible , but may not be best way to go about it

//COLT SOLUTION (from stack overflow)
function getDigit(num, i) {
    return Math.floor((Math.abs(num)) / Math.pow(10, i)) % 10
}

//quickly want to understand what going here -
//feel the abs is to avoid issues with negative numbers, the floor is to remove anything trailing and return only whole number
// the equation of num / (10^i) that part i get then it goes to this operator % what happends there
//the power portion moves decimal to place where wanted digit ends up in what we know as the ones place
//then the % 10 removes all digits that come after the ones place (does end with a decimal remailder, and that's what the floor is for)
//**note that % dosent remove digit as functinality but the math behind it is what result in the removal (divides the digit by % 10) 
//--and leaves us with the remainder, what's left over portion that wasn't divisible*/

//this mathatical approach is 1000% better then the split and reverse am pretty darn sure its more efficient and effective
//--thought i'll note that i think this only works for base ten and not all bases , where my would always work as no math
// console.log(getDigit(74648, 2))

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Helper function #2 and 2.1 -
//evals how many( split into bucket and into list processed) we'd have to run
// -aka the largest number of digit in one number inside data passed in

//digit counter just like above can be done be changing to string or Maths
// function digitCount(num) {
//     return (num + '').length
// }

function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1

}
//quick what's going on here - 1st Math.abs to avoid any negatives, math.log10 asks 10 to what power/exponent = num
//--which return ~~ the length of number we add one to insure length is correct (math things def reson why come up just short)
//---then because well have decimals we floor to get whole number
//nothing wrong with taking code from online sorces 
//--what is wrong in my opinion is using code you dont understand how it works

//serves to find to maximum length
//--accepts a list of numbers
function maxDigit(list) {
    let max = 0
    for (let len of list) {
        max = (max > digitCount(len)) ? max : digitCount(len)
    }
    return max
}
// console.log(digitCount(123456789))
// console.log(maxDigit([1, 2, 12121, 3]))



// ----------------------------------------------------------------------------------------------------------------------------------------------

// Radix Sort -
//

//pseudo code -
//define a function that accepts list of number
//-figures out how many digits the largest number has (we have that maxDigits) (this also === # times loop needed to run)
//loop form k = 0 to this largest number of digirs aka(result of maxDigits)

//--create buckets for each digit (0-9) [bucket is an empty array](one way to do it)
//----newArr[0] starts empty then we add appropriately
//----place each number in the corresponding bucket based in its digit from number in position wanted
//-----that digit return represent the bucket/index in newArr where it will be stored
//then replace our existing array with values in out buckets, starting with 0 and going up to 9
//return list at the end (concat into a new array) [interesting ???]

//two lops one outer(max digit length) and inner (to do grab each digit from number in wanted position)


function radixSort(nums) {
    let max = maxDigit(nums)
    for (let k = 0; k < max; k++) {
        //loop till reaches max aka length of the larges number (largest number of digits in number)
        let buckets = Array.from({ length: 10 }, function () { return [] }) //every iteration reassigned to empty arrays
        //commonly writen as array (i do this way isure we understand)
        //creats a new array 
        //learned can set length wanted dont with {} guess done that way cause your editing the array actual property
        //then function (no argument) then return just empty array
        //end result is an arrray length of 10 with each value being an empty array []

        for (let i = 0; i < nums.length; i++) {
            //this loops through the whole array
            // console.log(getDigit(nums[i], k))

            let digit = getDigit(nums[i], k) // simplicity , returns the digit inposition wanted from number
            console.log(digit)
            buckets[digit].push(nums[i]) // dependign on current digit/bucket selected that where the whole number gets push
            //pushed number into matching bucket

        }
        nums = [].concat(...buckets) //knew we'd use spread tryed but didint think concat with [empty array]
        //seem easy way to create new array of all value while preserving its order

        //this reassignment reorders the arr then get broken up again via bucket the back into new order and so forth
        //---for that happends many time as max 
        console.log(nums)
        console.log(buckets)
    }
    //in the end we return the newly rearranged nums now sorted
    return nums
}


// console.log(radixSort([44, 1, 6, 55, 3243]))


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Radix Sort Big O complexity
// time complexity O(nk)    - meaning worst case is nums(array) * max(number of iterations needed, or length or numbers)
// space complexity O(n + k)    - nums(array) + max(number of iterations needed, or length or numbers)


//n - length of array 
//k - number of didits(avg)






// ----------------------------------------------------------------------------------------------------------------------------------------------



//like to note that with these more complex algo's really taking advantage of recursion and utilizing seperate little helper
//--function all focus on returnin evaluating something needed for the whole to come togather
//--and desined as individual in sense where work great to be passed in recursively
//---solutino it self using a divide and conquer method giving a piece to one function then calling all helper
//----in strategic order in the main function








// ----------------------------------------------------------------------------------------------------------------------------------------------

//RADIX SORT - 

//helpers
//return digit in number and positions wanted
function getDigit(num, i) {
    return Math.floor((Math.abs(num)) / Math.pow(10, i)) % 10
}
//return value representing a numbers length or number of digits 
function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1

}
//returns value representing max number of iterations length of larges number
function maxDigit(list) {
    let max = 0
    for (let len of list) {
        max = (max > digitCount(len)) ? max : digitCount(len)
    }
    return max
}

//main
function radixSort(nums) {
    let max = maxDigit(nums)
    for (let k = 0; k < max; k++) {
        let buckets = Array.from({ length: 10 }, function () { return [] })

        for (let i = 0; i < nums.length; i++) {

            let digit = getDigit(nums[i], k)
            buckets[digit].push(nums[i])

        }
        nums = [].concat(...buckets)
    }
    return nums
}

console.log(radixSort([44, 1, 6, 55, 324, 43, 4545234, 54, 345, 838, 555, 2300, 92, 11, 21, 37, 54, 7, 77, 91, 90, 111, 22, 4, 33]))