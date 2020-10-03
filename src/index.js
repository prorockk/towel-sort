
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[]
  if (matrix){
    for (i=0;i<matrix.length;i++){
      let t=Array.from(matrix[i])
      if (i%2!=0){
        t=t.reverse();
        for (j=0; j<matrix[i].length;j++){
          arr.push(t[j])
        }
      }
      else {
          for (j=0; j<matrix[i].length;j++){
        arr.push(t[j])
      }
    }
    }
  }
  return arr;
}
