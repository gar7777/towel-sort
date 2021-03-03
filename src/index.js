
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  
  if (!matrix) {
    return res;
  }

  for(i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
      for(j = 0; j < matrix[i].length; j++){
        res.push(matrix[i][j]);
      }
    }
    else if (i % 2 !== 0) {
      for(j = matrix[i].length - 1; j >= 0; j--){
        res.push(matrix[i][j]);
    }
  }
}
  return res;
}
