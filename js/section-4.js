'use strict'
console.log('section-4')

// Algorithms and Problem Solcing Patterns
// Objectives:
// define what an algotithm is 
// devise a plan to solve  algotithms 
// compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

// what is an algotithm? - a process or set of stpds to accomplish a certain task.
// everything you do in programmins incolces some kind of algorithm
// -its the foundation for being a successful problem solving and developer

// How do you improve? -(time bruh and repetition and focus on understanding)
// divese a plan for solving problems 
// master common problem solving patterns - (recipice for solving particular type of challanges)

// Problem Solving Strategies:
// understand the problem
// explire concrete ecamples 
// break it down 
// solve / simplify
// look back and refactor

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Understand the Problem:
// can't solve the challange if you dont understand what solution is expected
// Quetions: 
// Can I restate the challange in my own words?
// what are the inputs that go into the problem?
// what are the outputs that should come from the solution to the problem? (what should it look like?)
// Can the outputs be detemined from the inputs? (off bat do i have enough info to solve the challange?)
// How should i label the omportatnt pieces of data that are a part of the problem? (what really matters here? what gets underlined)

// Ex. 
// write a functino which takes two numbers and returns thier sum?

// restate- 'wrtie a function that adds two values'

// what are the inputs? would think numbers only (vary how long will number be, are they floats, integer ect...) and two seperate values/individual numbers
// -----vary on language but if num larges issue with simple math where now be better to use string in play to help with the addition , ect.. and so forth (important distictions to make and take into account)
// ------what happens if a number is left out, if extra added (will the function only work with two nubers, more , less) what if a string is passed in?
// -------we need to define as to what exactly will be passed in and what will not be as input

// what are the outputs? what formats? ect... is it only in integer , well if we add to floats then we'd need to convert ect.. (all important things we need to take into account)
// -----we need to define what exactly format type ect.. is need for the return output of the functino

// once we define thought now we have rails of sorts to work within, can start thinking as too what tools and methods can help us achieve just that 

// can the output be determined by input? most cases yes right , however what happends if the input passed in is undefined, empty ect... what then
// -----do we pass in a zero? do we ignore , does that break operation ect.. /what do we do? (kinda like considering the edge case)

// how should we label impoortant stuff? my though is simple dont bs it make it descriptive as possible where you never question what its representing (name should tell you exactly)
// -----this case function add var's num1 and num2 then sum as result

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Concrete Examples:
// explore concrete examples 
// coming up with examples can help you understand the problem better 
// examples also provide sanity checks that your eventual solution works how it should

// Start with 2-3 simple examples
// then more complex examples
// then edge cases (input empty ect...)
// explore examples with invalid inputs

//Ex. write a function which takes in a string and returns counts of each character in the string.
// my words 'return count of appearanceses for each unique character in string 
// my examples: function('aaaa') return 4
// ---- function('hello') return h:1, e:1, l:2, o:1 
// more complex ex.:
// ----what if 'Hello hi' well is it case sensitive?
// ----what if 'my phone # 12345' should we account for other type of characters other then letters?, should we account for spaces?, do we count the number and special character? ect...
// explore example with empty input -- what do we want to return (null , try angain?, 0, ect...)
// what if invalid input -- we get a string instead of number, what should we return then?

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Break it down: 
// layout your steps will take prior to writing the code
// this will help clear up process from start to finished output and highlight areas where you know exactly what to do and where might have to figure it out 
// //make objext to return at end
// //loop over string for each character
// //if the char is a num/letter key in object , add one to count
// //if the char is a num/letter not in object, add it and set value to 1
// //if not a number or letter ignore
// //return object

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Solve and Simplify:
// even if your not 100% on how exactly you'll implement steps layed out get started and chip away at it 
// work on parts you know setting up for part you may not now exactly how to solve yet - as you go solution and idea's will come
// solve the problem if you can't solve a simpler/smaller problem - (temp ignore stuck, focus on whole and come back)

// find the core difficulty in what you're trying to do 
// temporarily ignore that difficulty 
// write a simplified solution
// then incorporate that difficulty back in - by this time will have grasped idea's and solutions how to achieve it


// ----------------------------------------------------------------------------------------------------------------------------------------------

// Look Back and Refactor:
// aim for the effective and efficient solution as posible while still being readable
// elimanate redundencies 
// ask self is there a better what to achieve same result? ect.. aim to improve upon it
// can you check the result?
// can you derive the result differently? - rarely only one solution can you think of otherways you may achieve the same result?
// can you understand it at a glance? - how intuative is a solution - can it be used to solve other problems/challenges future and past
// can you inprove the performance of you solution? - time and space complexity 
// can you think of other ways to refactor?
// how have other people solved this problem? - asking self, other, resource ect.. good to explore different strategies for solving the same challange

// ----------------------------------------------------------------------------------------------------------------------------------------------

//Recap:
// understand the problem - (how it should operate)
// explore concrete ecamples - (what input and output expected)
// break it down - (map out your steps)
// solve/simplify - (work with what you know aware of the portion haven't yet figured out)
// look bvack and refactor - (aim to better it in everyway possible)


// ----------------------------------------------------------------------------------------------------------------------------------------------



//Seperate about actual algo saw used----
// learned that you can set a variable wether just that or value in array or object you can set more then one value to it
// basically works like a ternary operator without the ternary operator 
// ex. obj[char] = obj[char]++ || obj[char] = 1
// where depending if obj[char] is truthy or false aka if it already exist or not 
// if it does then true and become 1st value/ran ect.. if dosent exist or false then 2nd run/becomes the value
// super cool thing you can do with true and false clever thing that help elimanate code

// replacing regex with a number range using its charCode -- interesting and apperantly more efficient (thought for some thing may not be worth or possible like checking for specified format in some cases though still possible)



