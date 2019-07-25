/*
Find a pair of elements from an array whose sum equals a given number

Input:
An array of n integers and given a number X.

Expected output:
All the unique pairs of elements (a, b), whose summation is equal to X.
*/

let unsorted_arr = [5,4,6,7,8,2,9];
let target = 9;

const findPairs = (arr, target) => {
	if (arr.length  < 2) return [];
	let start, end, sum;
	let sorted_arr = arr.sort();
	let i = 0;
	let j = arr.length - 1;
	let result = {}
	while (i < j) {
		start = sorted_arr[i];
		end = sorted_arr[j];
		sum = start + end;
		if (sum === target) {
			result[start+","+end] = true;
			i++;
			j--;
		} else if (sum > target) {
			j--;
		} else {
			i++;
		}
	}
	return Object.keys(result);
}

var pairs = findPairs(unsorted_arr, target);
console.log("pairs: ", pairs)