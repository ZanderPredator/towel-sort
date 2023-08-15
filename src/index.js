
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length == 0) {
        return []
    }
    let arr = matrix.map((item, index) => {
        if (index % 2 != 0) {
            return item.reverse();
        }
        return item;
    })

   return([].concat(...arr));
}
