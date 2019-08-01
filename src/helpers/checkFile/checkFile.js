/**
 * This function will check into a file by Binary search
 * Logarithmic runtime
 * Big O Notation: "0 (log n)"
 * @param file
 * @param key
 * @returns {number}
 */
const checkFilebinarysearch = (file, key) => {

    let low = 0;
    let height = file.lenght - 1;
    let mid;
    let element;

    while (low <= height) {
        // Get to the middle index of the file
        mid = Math.floor((low + height) / 2, 10);
        element = file[mid];

        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            let high;
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

// export default checkFilebinarysearch();
