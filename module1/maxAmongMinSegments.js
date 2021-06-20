function findMaxSlidingWindow(arr, windowSize) {
  let result = [];

  if (arr.length == 0) {
    return result;
  }

  if (windowSize > arr.length) {
    return result;
  }

  let window_ = [];
  //find out max for first window
  for (let i = 0; i < windowSize; i++) {
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    window_.push(i);
  }

  result.push(arr[window_[0]]);

  for (let i = windowSize; i < arr.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }

    //remove first number if it doesn't fall in the window anymore
    if (window_.length > 0 && window_[0] <= i - windowSize) {
      window_.shift();
    }

    window_.push(i);
    result.push(arr[window_[0]]);
  }
  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max = " + findMaxSlidingWindow(array, 3));

function maxAmongMinSegments(segLen, space) {
  let mins = [];
  let indexes = [];

  if (segLen >= space.length) {
    return Math.min(...space);
  }

  // first iteraction
  for (let i = 0; i < segLen; i++) {
    popIndexesWichValuesAreGreaterThanCurrIndexValue(space, indexes, i);
  }

  mins.push(space[indexes[0]]);

  for (let i = segLen; i < space.length; i++) {
    popIndexesWichValuesAreGreaterThanCurrIndexValue(space, indexes, i);
    shiftGreatestValueIndexIfOutsideSegment(i, indexes, segLen);
    mins.push(space[indexes[0]]);
  }

  return Math.max(...mins);
  // return mins;
}

function shiftGreatestValueIndexIfOutsideSegment(currIndex, indexes, segLen) {
  if (currIndex - indexes[0] >= segLen) {
    indexes.shift();
  }
}

function popIndexesWichValuesAreGreaterThanCurrIndexValue(space, indexes, i) {
  while (indexes.length && space[i] <= space[indexes[indexes.length - 1]]) {
    indexes.pop();
  }
  indexes.push(i);
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max = " + maxAmongMinSegments(3, array2));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];
console.log("Array = " + array1);
console.log("Max = " + maxAmongMinSegments(100, array1));
