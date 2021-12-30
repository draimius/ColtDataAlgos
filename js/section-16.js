'use strict'
console.log('section-16')

// Quick Sort

// like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
// works by selectino one element (called the 'pivot') and finding the index where the pivot should end up in the sorted array
// -then we move all value less then 'pivot' are moved to the left and all those greater moved to the right of pivot
// --then we repeat the process on either side of the pivot

//moves all that are less than pivot get moved to front
//we also keep track of how many we're there that = index pivot should be at
//once the pivot value is positioned its fixed in place

//seem that we always keep the conunt of number of element that are less then pivot


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Pivot Helper Function

//pseudo code -
//helper funciton responsible arranging elements, in an array on either side of a pivot
//given an array , this helper funciton should designate an element as the pivot
//is should then rearrange elemetns in the array so that all values less tahn the pivot are moved to the left of the pivot
//--and all values greater than the pivot are moved to the right of the pivot
//***note order on either side dosent matter
//IMPORTANT: heper should do this inplace, aka in the same array (mutate) should not create new array
//---when complete , the helper should return the index of the pivot ( to be cemented)

// Picking A Pivot -
//the runtime of quick sort depends in part on how one selects the pivot
//ideally, pivot should be chosen so that it's roughly the median value in the data set your're sorting (not really possible if dont know data)
//for simplicity in this sake we will only pick the first element for this case ( though can be done different ways)

// I think just delete from currect and insert into the index wanted
//note wants us to return index it should be in / which is also = to the number of elemetn less than pivot

// more pseudo -
// accepts 3 inputs (array, startIndex, endIndex)
//--be the arr , 0 , length -1
//grab the pivot from the start of the array(our case for ecample the first elemetn)
//store the vurrent pivot index in a var (this wil keep track of where the pivot should end up)
//loop through the array form the start until the end
//---if ( the pibot is greater than the current element, increment the pivot index++ variable and then swap the current
//-----element with the element at the pivot index)
//swap the starting element(the pivot ) with the pivot index
// return the pivot index (explanition is not confusing initially but ill get it)

//pivot index = # element less than pivotValue
//keep track of the element being checked against the pivot
//--where if there is a element less than(aka needs to go to left )
//---then we need to swap the the element that is less then with the one greater then pivot
//-----there a relation with the less then count and index for swapping
//-------would be current swap with index(# elements less then pivot +1)
//then after no more elements that are less then and we reached the end of the array
//--we swap the pivotValue to the index = #element that were less then pivot value

function helper(arr) {
    let start = 0
    let end = arr.length
    let pivotIndex = 0

    for (let i = 1; i < arr.length; i++) {
        //constantly moves any element less then to the left
        if (arr[start] > arr[i]) {
            let temp = arr[i]
            arr[i] = arr[pivotIndex + 1]
            arr[pivotIndex + 1] = temp

            //counld just move this before the swap , then no need for the +1
            pivotIndex++
        }
        console.log(arr)
    }
    //final move of the pivot element into it's appropriate position
    //--not sure if this is needed
    console.log(arr[pivotIndex])
    let temp = arr[pivotIndex]
    arr[pivotIndex] = arr[start]
    arr[start] = temp

    console.log(arr)
    return pivotIndex
}
// console.log(helper([12, 3, 4, 55, 62, 77, 11, 110]))
///**we learned that the variable set in the argument/params and needed to be defined there as well as passed through 
///**so this would not do as in this var are set inside the function (works for what wanted but not as a helper to quicksort recusion) */ */
//does what i want it to do though not sure if that exactly what the wanted ouput would be aside the pivotIndex
//--the array portion is in question though in format wanted and no new array (mutated)

//COLT HELPER SOLUTION - 
function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start]
    let swapIndex = start
    for (let i = start; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            let temp = arr[i]
            arr[i] = arr[swapIndex]
            arr[swapIndex] = temp
        }
    }
    let temp = arr[start]
    arr[start] = arr[swapIndex]
    arr[swapIndex] = temp

    // console.log(arr)
    return swapIndex
}




// console.log(pivot([12, 3, 4, 55, 62, 77, 11, 110]))
// ----------------------------------------------------------------------------------------------------------------------------------------------

// Quick Sort
//before are base case had issue of calling left or right before initioaon 
//--now if those get passed is as input they already exist and we dont have that issue (clever)
////does the -1 here effect all recusive input that's being passed in like from the left and right ????
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)

        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)

    }
    return arr
}




//psuedo code -
//call the pvot helper on the arrray
//then recursively call qucksort on either side of the pivot point returned
//--helper returns to you the updated pivot index, recurse call the pivot helper on the suvarray to the laft of pivotIndex
//---then on the subarray to the right of pivotindex
//***note all is happening in the same array it's mutating original array (nothing new is created) */
//base will be if the subarray has a length of 1(one) aka less then 2 element 



console.log(quickSort([3, 44, 1, 6, -55, 11, 21, 37, 54, 7, 77, 91, 90, 111, 22, 4, 33]))


//very interesting , seems that we need those varibles set and passed in the funciton input (cant be set inside)
//also that in passing in changing input we use result of function being called like that ( vs how original try using slice)
// ----------------------------------------------------------------------------------------------------------------------------------------------

//Quick Sort Walkthrough (how it works)
function quickSort(arr, left = 0, right = arr.length - 1) {
    //if short we are check that there is a value to check/sort in the array
    //--when there is not difference between values there nothing there to sort
    //---equavilante and a arr.slice(0, 0) from 0 to 0 well that nothing as it starts and stops at the same value/index
    if (left < right) {
        //this only run when the below quickSort function attempts to run (because to do so it required the return value of this)
        let pivotIndex = pivot(arr, left, right)

        //*left
        //this function waits for the return of pivot to be to then be evaled and generate final value that gets passed in
        //--to the quicksort function
        //--it almost works like a slice were we have array.slice(left (which is 0), right(return of pivot -1))
        //---in this way it only works with the portion of array that is left of pivot(aka value less then pivotValue)
        //----the -1 is important as that's what changes the input being passed in shrinking the 'slices' length
        //------it bring the end closer to the start/left value (this case 0)
        //as on each i

        quickSort(arr, left, pivotIndex - 1)
        //*right
        quickSort(arr, pivotIndex + 1, right)
    }
    //simply return the array after everything
    return arr
}


//*important to note that it runs in order right where everything is kinda held up on that first quicksort
//--as (pivot just for eval and change input to sort and mutate array) when it recursively calls itself
//---it again gets help up there running pivot eval run quicksort and contunie (all hung up on that first quickSort)
//----till reaches that base case where its start and end == and we return array
//and only then does it move to next line of code in the original quickSort call
//--then all repeated for right side / or secode quickSort recusive call
//---till like the other continue that same cycle(???? would not in that call on recuse call also run the first call)
//----or is there something there not that is been completed where it will always return the array back
//------to then allow the second to run (i think so , its right)
//-------when the second is allowed to run the first quickSort call only return array now(null void)(short circuts it basically)
//--------because the value of left and right will always hit base case thous always returning array
//---------and allowing the second quickSort call to run uninterupted, altered ect
//then like first call run till right and left === each other
//--right does it by inscementin (like slice(pivont +1), lenght -1)
//---as it run increments till base case and returns array
//----while returning pivot array was mutating and sorting
//-----in end wa have a fully sorted array returned (genuis)

//bacuase se above example , then secod sort runs left and right on the first quickSort will always = eachother
//--and hit base case and just return the array then allow it then to move onto the second quicksort call
//---and operated as was



// ----------------------------------------------------------------------------------------------------------------------------------------------

//Quick Sort Big O

//best case
// time complexity O(nlogn)
// space complexity O(n)

//worst case(for our ex. where pivot always = first in array )
//here with worst case with our current algo would be 
// bit O(n^2)  - which is not great

//problem arises when the pivot selected is the extrem aka 
//--its always the minimum value or always the max value

//idealy we always pick the median value (though not always possible right else, we'd already know order or data)
// another way around this aiming to avoid (is using a randowly chosen pivot each time)





// ----------------------------------------------------------------------------------------------------------------------------------------------


//QUICK SORT ALGO -
//***note this is quicksort where the pivot is always the first value in array(can be done differently and can effect runtime) */

// helper
// **edited with Math floor chosing the index in middle of array (not really sure what effect had wether better worse ????)
//*((could also create something that generate randow num to use))
function helper(arr, start = Math.floor(arr.length / 2), end = arr.length + 1) {
    let pivotValue = arr[start]
    let pivotIndex = start
    for (let i = start; i < arr.length; i++) {
        if (pivotValue > arr[i]) {
            pivotIndex++
            let temp = arr[i]
            arr[i] = arr[pivotIndex]
            arr[pivotIndex] = temp
        }
    }
    let temp = arr[start]
    arr[start] = arr[pivotIndex]
    arr[pivotIndex] = temp

    return pivotIndex
}


// main
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = helper(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}


console.log(quickSort([3, 44, 1, 6, -55, 11, 21, 37, 54, 7, 77, 91, 90, 111, 22, 4, 33]))
