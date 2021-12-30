'use strict'
console.log('section-15')

// Intro to 'more complex' Sorting Algos

// Objective:
// -understand the limitaations of the sorting algos we/ve learned so far
// -implement merge sort
// -implement quick sort
// -implement radix

// why lean this?
// -previous algo we covered do not scale well

// Faster sorts
// -these fater algo can improve time complexity from O(n^2) to O(nlogn)
// -theres trade off between efficiency and simplicity
// -the more afficient aldorithms are much less imple, and generally take longer to understand


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Merge Sort
// -it's a combination of two things - merging and sorting
// -exploits the fact that arrays of 0 or 1 element are always sorted
// -works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (divide and conquer)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Merging Arrays
// helper function for merge sort

//pseudo code - 
// create function reposible for merging two sorted arrays 
// given two array which are sorted, should create a new array which is also sorted, 
// --and cosiste of all of the element in the two input arrays
// funciton should run in O(n + m) time and space , and should not modify parameters passed to it

//create an empty array to push to and return 
//whle there are still value we havent looked at (in either array)
// if the valu in the first array is smaller than the value in the second aray
// --PUSH the value in the FIRST aray in to our result and move to the next value in the first array
// if the value in the first array in large than value in the second array, 
// --PUSH the value in the SECOND array into our results and move onto the next value in ths second array
// once we exhaust on e array , push in all remaining values from the other array into resutl /newArr


// My merge helper function (V2 update)
function merge(helperArr1, helperArr2) {
    let arrIndex = 0
    let arr2Index = 0
    let newArr = []
    let max = Math.max(helperArr1.length, helperArr2.length)
    while (arrIndex < max) {
        if (helperArr1[arrIndex] < helperArr2[arr2Index]) {
            newArr.push(helperArr1[arrIndex])
            arrIndex++
        }
        else {
            newArr.push(helperArr2[arr2Index])
            arr2Index++
        }
        if (arrIndex === helperArr1.length) {
            let temp = helperArr2.slice(arr2Index)
            newArr.push(...temp)
            break
        }
        else if (arr2Index === helperArr2.length) {
            let temp = helperArr1.slice(arrIndex)
            newArr.push(...temp)
            break
        }
    }
    return newArr
}

// proud of my solution though few thing can be cleaned up 
// the edge case of where values actually equal eachouther the what? 
// also though clever feel the break portion (or maybe it better right) but should have to be there for the loop to stop appropriately

// console.log(merge([1], [2])) // 
// console.log(merge([1, 10, 50], [2, 14, 99, 100])) // [1, 2, 10, 14, 50, 99, 100]
// console.log(merge([1, 10, 50], [2, 14, 99, 100])) // [1, 2, 10, 14, 50, 99, 100]
// console.log(merge([4, 14, 99, 100], [3, 10, 50])) // [3, 4, 10, 14, 50, 99, 100]
// console.log(merge([2, 4, 7, 14, 99, 100], [1, 3])) // [1, 2, 3, 4, 7, 14, 99, 100]
// console.log(merge([2, 4, 7, 14, 99, 100], [1, 3, 66, 71, 80, 111, 122])) // [1, 2, 3, 4, 7, 14, 66, 71, 80, 99, 100, 111, 122]
// console.log(merge([2], [1, 3, 66, 71, 80, 111, 122])) // [1, 2, 3, 66, 71, 80, 111, 122]
// console.log(merge([], [1, 3, 66, 71, 80, 111, 122])) // [1, 3, 66, 71, 80, 111, 122]


// //COLT SOLUTION -
function coltMerge(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        }
        else {
            results.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }

    return results
}

//like the use of the if and else vs else if  does this to capture the edge case where values equal eachother
//interesting using a while loop withing to iterate through to push each value to the newArr instead of just pushing the full slice
// -wonder how those differ or why you would do one over the other (i just now knowing big O avoid any nested loop , but maybe that shouldn't always be the case)
// console.log(coltMerge([2], [1, 3, 66, 71, 80, 111, 122])) // [1, 2, 3, 66, 71, 80, 111, 122]


// NOTE THIS IS THE 1ST PART
// - the longer piece of merge sort (the helper function)


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Merge Sort Exersice

//merge sort pseudocode -
//recursion sounds perfect for this
//break up the array into halves until you have arrays that are empty or have one element (slice)
// - base case if when those array reach the length of 1 or less
//1st step contunuesly break them up till length is one or less
//2nd step use helper function to put those broken array back together till we are back to full original array length

//******My Helper function******************
function merge(helperArr1, helperArr2) {
    let arrIndex = 0
    let arr2Index = 0
    let newArr = []
    let max = Math.max(helperArr1.length, helperArr2.length)
    while (arrIndex < max) {
        if (helperArr1[arrIndex] < helperArr2[arr2Index]) {
            newArr.push(helperArr1[arrIndex])
            arrIndex++
        }
        else {
            newArr.push(helperArr2[arr2Index])
            arr2Index++
        }
        if (arrIndex === helperArr1.length) {
            let temp = helperArr2.slice(arr2Index)
            newArr.push(...temp)
            break
        }
        else if (arr2Index === helperArr2.length) {
            let temp = helperArr1.slice(arrIndex)
            newArr.push(...temp)
            break
        }
    }
    return newArr
}

//******Main Merge Sort Funciton*******************
function mergeSort(arr) {
    if (arr.length <= 1) { return arr }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}



function mergeSort(arr) {
    //we are basically waiting for base to be met so that then all previous 
    //--function call results can be returned then passed into our final merge
    //---its like left and right are builing thier own sorted arrays using the return of the recursion call
    //----then once each have return all way back to original half length aka cleared all calls from stack
    //-----takes those result /var and runs merge on then(maybe be wrong there)
    //------as that merge return at in is actually running each array split(tricky)
    //after base meges returns which were 1-1 then runs again now mergin those [1-1] and [1-1] and contunies till original length

    if (arr.length <= 1) { return arr }
    //constantly set new mid point by which to break down the arrays passed in into halves
    let mid = Math.floor(arr.length / 2)

    // here varible actually = recursive call awsome
    //also note that each side runs to completion of creating is half of the sorted array
    let left = mergeSort(arr.slice(0, mid))
    // for both initially arr sliced in half and passed in then these take those half and do the same
    //--get passed in each again and and again broken into halves, this continues till we reach all length on 1 or less
    let right = mergeSort(arr.slice(mid))
    //then here everything comes together, we call merge to piece all the previously split arrs
    //--where in kinda works backwords in a sense where the slicing and calling continues till base case
    //--but before base case is met nothing is being return at thing point we have split everything but not values are returned
    //--right now everything is a length on all has been broken down
    return merge(left, right)
    //now that base case has been met it return the array aka(it stars to spit back out all of those previously split array out)
    //and because they were length one it starts there merges length 1-1 to 2-2 to 4-4 and continue with all 
    //-returned array(previously passed in) but now going through merge function that returen arrays back sorted
    //---ending with whole original array sorted in the end 
    //----genuinly beautiful its complexity , simplicity and clever use of recursion its pretty darn cool

}

// console.log(mergeSort([43, 2, 5, 6, 45, 76, 77, 88, 67, 3, 5, 55, 11, 21, 12, 999, 9, 112, 1]))
//everytime it returns return sorted array greater in length each side does this 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// function mergeSort(arr) {
//     if (arr.length <= 1) { return arr }
//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)

// }

// want to note the structure of having base case that simple usuall we've seenthat 
//--what we haven't see is having a varible = a recursive call
//--and that each recursive call include another whole function
//--create very genius function like loops that expends contracts with its data set 

//very interersting how it works - 
//where of bat first thing happening is for it to build the left=
//-takes that half run again breaking down further still aiming to complete left=
//--continues to do this till reaches length on passed in as input
//---when this happends (funciton now start working kinda backwards then it previously was)
//----base case triggers (function never ran on 1 length) means we got to 2length where [1,2]
//-----that way we have a right an left to work with from that return it merges then in sorted order
//------(question a have as where go from there were does that sorted portion go?)
// guess that actually gets returned as the left , where the right did those previous actions as well building up sorted arr
//--then with now another left and right we merge that again
// and again return the sorted left and right and merge again till the merged arr is == to the original array length




// ----------------------------------------------------------------------------------------------------------------------------------------------

// Merge Sort Big O
// where these faster sorting algos differ is better in time but use more space 
// time complexity O(nlogn)
// space complexity O(n)

//merge sort (pro con doesn't care if date is completly, almost or not sorted at all treats them all the same)

//for algo that can sort any type of data so far best is nlogn for now




// ----------------------------------------------------------------------------------------------------------------------------------------------

//MERGE SORT ALGO:



//helper
function merge(helperArr1, helperArr2) {
    let arrIndex = 0
    let arr2Index = 0
    let newArr = []
    let max = Math.max(helperArr1.length, helperArr2.length)
    while (arrIndex < max) {
        if (helperArr1[arrIndex] < helperArr2[arr2Index]) {
            newArr.push(helperArr1[arrIndex])
            arrIndex++
        }
        else {
            newArr.push(helperArr2[arr2Index])
            arr2Index++
        }
        if (arrIndex === helperArr1.length) {
            let temp = helperArr2.slice(arr2Index)
            newArr.push(...temp)
            break
        }
        else if (arr2Index === helperArr2.length) {
            let temp = helperArr1.slice(arrIndex)
            newArr.push(...temp)
            break
        }
    }
    return newArr
}

//main
function mergeSort(arr) {
    if (arr.length <= 1) { return arr }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}




console.log(mergeSort([43, 2, 5, 6, 45, 76, 77, 88, 67, 3, 5, 55, 11, 21, 12, 999, 9, 112, 1]))