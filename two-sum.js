//Question: Given an array of integers, return the indices of the two numbers that add up to a given target.
// P. R. E. P

/**
 *  P => Parameters => [1, 3, 7, 9, 2]
 *  R => Returns    => 2 numbers ...as an array?
 *  E => Examples   => 11 => [9, 2]
 *  P => Pseudo Code
 *
 */

/**
## Step - 1: 
 *  Qustion to ask the interview?
 * 
 * 1. are all the numbers positive or can there be negatives? --all numbers are positive
 * 2. Are there duplicate numbers in the array? - no duplicates
 * 
 * 3. will there always be a solution available? no, there may not always be a solution.
 * 
 * 4. What do we return if there's no solution? --just return null
 * 
 * 5. Can there be multiple pairs that add up to the target? - no only 1 pari of numbers will add up to the target.
 * 
 * 
 Step - 2: Write out some test cases
 *    [1, 3, 7, 9, 2]  t = 11  [3, 4]
 *    [1, 3, 7, 9, 2]  t = 25  null
 *    []               t = 1   null
 *    [5]              t = 5   null
 *    [1, 6]           t = 7   [0, 1]
 * 
 * 
 * 
 Steps: Figure out a solution without code

 p1, p2
 Number to find = target - number[i]
        2       =   11   -  9


 */

function findTwoSum(arry, target) {
  for (let i = 0; i < arry.length; i++) {
    let numberToFind = target - arry[i];
    for (let j = i + 1; j < arry.length; j++) {
      if (numberToFind === arry[j]) {
        return [arry[i], arry[j]];
      }
    }
  }

  return null
}

console.log(findTwoSum([1, 3, 7], 11));


// Space & Time Complexity 
