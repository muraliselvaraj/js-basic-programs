/*
Find highest continuation of ones count in a given binary array

Input:
An array of binary integers.

Expected output:
Ex.Input: [1,0,1,1,0,1] ==> 2
*/

let input = [1,0,1,1,0,1,1,1,1,0];

const findMaxConsecutiveOnesCount = (arr) => {
	if (arr.length == 0) return false;
	let temp_count = 0, max_count = 0;
	let idx = 0;
	while (idx < arr.length) {
		if (arr[idx] == 1) {
			temp_count++;
			if (temp_count > max_count) {
				max_count = temp_count
			}
		} else {
			temp_count = 0
		}
		idx++;
	}
	return max_count
}

var max_ones_count = findMaxConsecutiveOnes(input);
console.log("max_ones_count: ", max_ones_count)