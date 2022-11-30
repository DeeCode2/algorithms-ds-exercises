//BRIEF
//Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
//Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            continue
        } else {
            //remove items from the end
            arr.pop();

            //insert duplicate 0; and shift i to the right
            arr.splice(i + 1, 0, 0);
            i++

            //i will reiterate starting from the next non-0 number as normal
        }
    }
};
