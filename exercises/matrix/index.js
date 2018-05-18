// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push([]);
    }
    
    let rowIndex = 0;
    let rowEnd = n - 1;
    let columnIndex = 0;
    let columnEnd = n - 1;
    let counter = 1;

    while (columnIndex <= columnEnd && rowIndex <= rowEnd) {
        for (let i = columnIndex; i <= columnEnd; i++){
            result[rowIndex][i] = counter;
            counter++;
        }
        rowIndex++;
        

        for (let i = rowIndex; i <= rowEnd; i++){
            result[i][columnEnd] = counter;
            counter++;
        }
        columnEnd--;
        

        for (let i = columnEnd; i >= columnIndex; i--){
            result[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;


        for (let i = rowEnd; i >= rowIndex; i--) {
            result[i][columnIndex] = counter;
            counter++
        }
        columnIndex++;
    }

    return result;
}

module.exports = matrix;
