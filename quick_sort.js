var quickSort = function(minIndex, maxIndex) {
 // Abort if Max and Min Index are same 
 
 if (minIndex >= maxIndex) {
  return;
 }
 // This variable will store the would be pivot position 
 //after current iteration
 
 var pivotPointer = minIndex;
 var currentIndex, temp;
 
 // iterate from min index to max - 1 index. 
 //Because we are considering last element as arbitrary pivot. 
 
for (currentIndex = minIndex; currentIndex < maxIndex; currentIndex++) {
 
//If an element is smaller than chosen pivot (ie. last element)
 //Swap it with pivotPointer element.
 
  if (source[currentIndex] < source[maxIndex]) {
   temp = source[currentIndex];
   source[currentIndex] = source[pivotPointer];
   source[pivotPointer] = temp;
   pivotPointer += 1;
  }
 }
// Found actual pivot , now swap it with arbitrarily chosen pivot. 
 temp = source[maxIndex];
 source[maxIndex] = source[pivotPointer];
 source[pivotPointer] = temp;
 
 // Now all elements left to pivot Pointer are less than it.
 // And all elements right to it are greater.
 // So recursively pass left and right subarray to sort.
 // divide and conquer strategy.
 
 quickSort(minIndex, pivotPointer — 1);
 quickSort(pivotPointer + 1, maxIndex);
}

var source = [9, 2, 7, 11, 1, 3, 14, 22];
quickSort(0, source.length — 1);
console.log(source);