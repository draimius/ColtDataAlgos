'use strict'
console.log('section-12')

// SELECTION SORT
// -similar to bubble sort, but instard of first palcing large values into sorted position, it does oppisite
// --places small value into sorted position

//unlike bubble the swap is different isn't between neigbor/ pair
//-it takes first value and continues to look for a lower value
//--it holds that lowers value comparing it to it neighbor down the indecies still looking for least
//---if something lower that becomes new hold else if nothing else lower and reached end
//-----at that point we swap the first value and that lowers value indexes
//------then we start again this time from index 1 not 0
//--just like bubble sort decremented length by 1 this in sense moves starting point up 1 each time makes full length check

//going throught an selecting the smalles value and placing it in the first position

//psuedo code-
//store the first element as the smalles value you've seen 
//complate this item to the next item in the array until you find a smaller number 
//if the minium os not the value you initailly began with , swap the two values
//repeat this with the next element untim the array is sorted.

//moves to the and still lookin for the lowest if dosent change and hit end arr then swap hold and first value




// ----------------------------------------------------------------------------------------------------------------------------------------------

// selection sort exercise -
// my selection sort algo based on what seen:
console.log('working ')
function selectionSort(arr) {
    let start = 0
    let end = 1
    let hold = 0

    while (start < arr.length - 1) {
        //holding index of the lowest value
        hold = (arr[hold] > arr[end]) ? end : hold

        //loop reached it end , end , start and hold an reset starting point be one
        if (end === arr.length - 1) {
            //checks lowerst doesn't = start (if they did be no point in swaping)
            if (arr[hold] !== arr[start]) {
                let temp = arr[start]
                arr[start] = arr[hold]
                arr[hold] = temp

            }
            start++
            end = start
            hold = start
        }
        // looping action
        end++
    }
    return arr
}



console.log(selectionSort([45, 33, 12, 2, 65, 22, 12, 1, 2, 3, 5]))



//plan -
//start represents the inintial element that is being compared for to find something lower
//--(after swap if done) this only increases once we reach the end of the array
// end represents the actual looping used to move and check values in the array looking for that less than value
//--this gets reset to zero when to the value of start and increment by one each check till again hit end of array
//hold represents the 'index' of lowest value , constently checked against the other value checked with arr[end]
//--constantly checking for lowest and is reassigned to that lower value
//---once reaches end of array if swap needed we take index of hold and the start value and swwap their positions
//----start = +1  and end = start+1  and hold = check with arr[hold] hold = end


//start serves to simply keep track of what we may swap , not used in evals

//dosent matter if the first value is less then the all other still have to go through and check the rest of array (pro & con)
//works however there is some redundency


// ----------------------------------------------------------------------------------------------------------------------------------------------

// selection sort Big O complexity -
//time complexity O(n^2) though it be (nlogn)but worst case would be quadratice
// only time this beats out bubble sort is when we want to minimize the # of swap that are done

