
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr =[];
  if (!matrix || matrix.length === 0) return arr;
  for (i=0; i < matrix.length; i++) {
    if (i % 2 !== 0) matrix[i].reverse();
    for (j=0; j < matrix[i].length; j++) {
      arr.push(matrix[i][j]);
    }
  }
  return arr
}