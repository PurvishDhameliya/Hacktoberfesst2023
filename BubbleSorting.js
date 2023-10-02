function bubbleSort(array) {
    let isSwapped;

    for(let i = array.length; i > 0; i--) {
        isSwapped = false;

        for(let j = 0; j < i - 1; j++) {
            if(array[j] > array[j + 1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                isSwapped = true;
            }
        }

        if(!isSwapped) {
            break;
        }
    }
    return array;
}


//Looping from end of array with variable i towards beginning.
//Start inner loop with variable j until (i - 1).
//If array[j] > array[j + 1] swap them.
//return sorted array.
