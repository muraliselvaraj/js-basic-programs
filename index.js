//1. Remove all adjacent duplicates in given string
// afcbddbcgf -> afcf, Jaaavvvvvvvvvaaaaaaaaaaa -> Java

var inputString = "NooooooodddddddeeeeeeeJJJJJSSS";
function removeIdenticalStr(input){
	var tempArr = input.split('');
	for(var i=0;i<tempArr.length;i++){
		if (tempArr[i] == tempArr[i+1]) {
			tempArr.splice(i, 1); // removing the duplicate character
			return removeIdenticalStr(tempArr.join(''));
		} 
	}
	return tempArr.join('');
}
var result = removeIdenticalStr(inputString);

/********************************************************************/

//$.each implemetation in javascript

function each(opts, cb){
	for(var i in opts){
		cb(i,opts[i]);
	}
}

each(['10','20'], function(a, v){
	console.log('a == ', a);
	console.log('v == ', v);
});

/********************************************************************/

// Merge two sorted integer arrays in ascending order

var a = [1, 3, 5, 7, 7, 8, 8, 9, 9];
var b = [2, 4, 5, 6, 7, 8, 9, 10];

function merge_v1(a, b){
	var c = [];
	while(a.length || b.length){ 
		if (a[0] < b[0]) {
			c.push(a.shift());
    	} else {
    		c.push(b.shift());
    	}
  	}
  	return c;
}

var merged_array_1 = merge_v1(a,b);

function merge_v2(a, b){
	var left=0,right=0,c=[];
	while(a.length != left || b.length != right){
	  	if (!a[left]) {
	    	c.push(b[right]);
	      	right++;
	      	continue;
	    }
	   	if (!b[right]) {
	    	c.push(a[left]);
	      	left++;
	      	continue;
	    }
		if (a[left] < b[right]) {
	    	c.push(a[left]);
	      	left++;
	    } else {
	    	c.push(b[right]);
	      	right++;
	    }
	}
  	return c;
}

var merged_array_2 = merge_v2(a, b);

/********************************************************************/

//Reverse a given array without using inbuilt function

var input = [1,2,3,4,5];

function reverse(input) {
    var len = input.length, temp;
    for (var i = 0; i < len/2; ++i) {
        temp = input[i];
        input[i] = input[len-1-i];
        input[len-1-i] = temp;
    }
    return input;
}

var reversed_arr = reverse(input);

/********************************************************************/