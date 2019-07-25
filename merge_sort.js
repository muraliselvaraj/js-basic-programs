const mergeSort = (arr) => {
	if (arr.length < 2) return arr;
	let mid = Math.floor(arr.length / 2);
	let subLeft = mergeSort(arr.slice(0, mid));
	let subRight = mergeSort(arr.slice(mid));
	return merge(subLeft, subRight);
}

const merge = (a, b) => {
	let result = []
	while (a.length > 0 && b.length > 0) {
		result.push(a[0] < b[0] ? a.shift() : b.shift())
	}
	return result.concat(a.length ? a : b);
}

let test = [1,2,9,3,2,5,14,0,8];
console.log(mergeSort(test)); // -> [0, 1, 2, 2, 3, 5, 8, 9, 14]