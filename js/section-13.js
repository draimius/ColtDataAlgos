'use strict'
console.log('section-13')

// INSERTION SORT

// builds up the sort by gradually creating a larger left half which is always sorted
// by inserting one item at a time in the correct position in datastructure

//seems that depeding on the value next to it vary side it looks for its place
//where moving smaller number pass larger one check if greater then ok move one and so forth
//--till it check greater than and return false then ok that where it belongs as the previous is larger and prefix is smaller
//---inserted itself right in the middle (be < or > vary on values and movement needed)

// are cases where is does very well

//psuedo code -
//start by picking the second element in the array
//now compate the second elemetn with the one before it and swap if needed
//continue to the next element and if it is in the incorrect order, iterete through the sorted portion(left side/ i suspect subarr)
//--to place the element i the correct place
//repeat until the array is fully sorted



//its almost like a combination of bubblt and selection

function insertionSort(arr) {
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

// insertion sort exercise -
//my insertion sort algo
// form trying and all videos article ect.. reasetch i've dont aiming at creating insertion sort without nesting loops 
// --or at least achieve the same with only one while loop have not been succesful (sure may be possible though)
// ---all solution i've seen one way or another even recursive involve a nested loop , while loop in for loop to be exact
// -----not stocked wasent able to creat my own but ok let study solution learn and keep moving enough time spend tryin to make my own

function insertionSort(arr) {
    let j, i;
    for (i = 0; i < arr.length; i++) {
        let current = arr[i]
        for (j = (i - 1); j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]
            // console.log(arr)
        }
        arr[j + 1] = current
    }
    return arr
}
//both i and j change at a constant rate one -- other ++
//just thier starting points are different



//*****MY asumption of the value not moving till it wasent able to move further do to param was Wrong
//--it is ok for it to move one by one swaps down the array to soted position dosent have to move multiple indecies in one swap
//mean i pretty much had the solution or very close like literally off by one maybe 1-2days ago when attempting to create it LUL
//ok though we learn grow move on, just come's back to understading the problem at hand and the outcome a method wated
//if i had review and played closer attention to how the algo moved value we would have figured that out im sure 

console.log(insertionSort([2, 1, 9, 76, 4]))
console.log(insertionSort([8, 2, 4, 1, 3]))
console.log(insertionSort([45, 33, 12, 2, 65, 22, 12, 1, 2, 3, 5]))


// ----------------------------------------------------------------------------------------------------------------------------------------------

// insertion sort big O

// big O(n^2) is our worse case senario
// works good for partly sorted data in comparison to selection or buble sort
// good algo for case where data is dynamicly incoming










