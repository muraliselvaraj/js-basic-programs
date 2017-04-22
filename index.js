//1. Remove all adjacent duplicates in given string
// afcbddbcgf -> afcf, Jaaavvvvvvvvvaaaaaaaaaaa -> Java

var inputString = "NooooooodddddddeeeeeeeJJJJJSSS";
function removeIdenticalStr(input){
	var tempArr = input.split('');
	for(var i=0;i<tempArr.length;i++){
		if(tempArr[i] == tempArr[i+1]){
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