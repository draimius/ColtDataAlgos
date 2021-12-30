'use strict'
console.log('section-11')

// SORTING ALGORITHMS

// process of rearranging the items in a collection so that the items are in some kind of order.
// ex.
// -number least to great
// -aplhabetically
// -revenue
// -dates, time ,ect..


// Why do we need to learn this?
// -sorting is an incredibly common task, good to know how it works
// -there aare many different ways to sort things, and different tachniques have their own advantages and disavantages
// depending on the data, its inherit order, then taks at hand the best algo will vary

// Objectives
// -implement bubble sort
// -implement selection sort
// -implement insertion sort

//elementary sorting algo great to know but not top tier
// understand why it is important to learn these simpler algorithms


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Build in Javascript Sorting

// .sort() - they dont always work as intended as they all have they inherit params they use to sort
// --like sort used the chars unicode (that if working with only number will give funcky return )
// ----(though id like to note that this if you dont specify any parameter as to how you want the data sorted)
// -----though at that point might just write the whole algo yourself

//sort use a comparator - looks at pairs of elements determines their sort order based on the return value
// - a - b  
// if that return negative sorts a then b if positive sort oppisite b then a 


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Bubbles Sort -
// a sorting algo where the largest values bubble up to the top

// not super efficient, not commonly used 
// is one use case where its choice 

// works by comparing element in pair checking which is greater 
// --if greater they swap places , if not stays put and we move to next comparison

// ex.
// [23, 4, 45,1]
// 23 -4 swap = [4, 23, 45,1]
// 23 - 45 no swap = [4, 23, 45,1]
// 45 - 1 swap = [4, 23, 1, 45]
// the largest value bubbles up to the Top (or this case end of array /top in index value)
// make more and more passed continuing the same patter and comparison till, we have every thing in place

//as we go through the number of element we have to sort decrement by 1


// swap with deconstruction -
// let swap = function (arr, num, num2) {
//     [arr[num], arr[num2]] = [arr[num2], arr[num]]
// }
//or use the third cup method



// ----------------------------------------------------------------------------------------------------------------------------------------------

// bubble sort exersice - 

// My bubble sort algo(happy about it , pretty cool)
//iterable
function bubbleSort(arr) {
    let start = 0
    let end = arr.length

    while (start < end) {
        // console.log(arr, arr[start], arr[start + 1])
        if (start + 1 >= end) {
            end--
            start = 0
        }
        if (arr[start] < arr[start + 1] || arr[start] == arr[start + 1]) {
            //no swap, move to next eval
            start++

        }
        else if (arr[start] > arr[start + 1]) {
            //we do the swap
            let temp = arr[start]
            arr[start] = arr[start + 1]
            arr[start + 1] = temp

            start++
        }
    }
    return arr
}

//we had issue with duplicates where it didnt move because it didnt meet any eval so had to add
//--in evern they match just move forward with no swap


// console.log(bubbleSort([45, 33, 12, 2, 65, 22, 12, 1, 2, 3, 5]))

//what do we know :
//we know that once we check to the last element or iterate through its length (values we have to sort decrement by one)
//we know it compares in pairs a-b and so forth
//--we know that if a is greater than b we swap them
//--else we leave them where there are and move to next comparison

//definately takes lot of iterations (not the best def better ways to do this)
// def things we can tweek here in our algo aswell should never pull underfined to compare

// be fun to make a algo visualized

// ----------------------------------------------------------------------------------------------------------------------------------------------

// bubble sort optimization

//thing with bubble sort say even if our data is sort but not completly (some out of place but not all)
// ex. [1, 6, 2, 3, 8, 9, 10, 11]
//-where here particularly the end is already done from 8 and so one

// bubble will treat it the same if it was little sorted or not at all
// --meaning still check all the way to the end  then end-- on each pass
// ---doing more work then needed (in case with large data base that mean lots of uneccessary iterations )

//can short circut with a check from start
//--we check if any swaps were made last iteration
// ---if did continue, if no swap was made the it done no more loops needed
//and we can check that each iteration through if at any point no swaps were made
//----return now no more loops needed

function bubbleSort2(arr) {
    let start = 0
    let end = arr.length

    while (start < end) {
        let swap = false
        console.log(arr, arr[start], arr[start + 1])
        if (start + 1 >= end) {
            end--
            start = 0
        }
        if (arr[start] < arr[start + 1] || arr[start] == arr[start + 1]) {
            //no swap, move to next eval
            start++

        }
        else if (arr[start] > arr[start + 1]) {
            //we do the swap
            let temp = arr[start]
            arr[start] = arr[start + 1]
            arr[start + 1] = temp
            swap = true

            start++
        }
        //able to add the cirsut breaker though not best implementation but works
        if (start + 1 >= end && swap == false) {
            return arr
        }
    }
    return arr
}

// console.log(bubbleSort2([2, 1, 2, 12, 3, 5, 12, 22, 33, 45, 65]))


// ----------------------------------------------------------------------------------------------------------------------------------------------

//bubble sort Big O
//time complexity tipically O(n^2) so not great
//space complexity (1) constatn

// when data is nearly sorted ca be O(n) which good but judging when will operate at that level and when not
// --how do we calc that form number of data point and how many or in optimal position already
// ---would take lot of effort to do the than just use better algo( though could just try each and see what returns best)



