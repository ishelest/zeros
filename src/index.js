module.exports = function getZerosCount(number) {
  let count = 0;
  let tempNumber = number;
  while (tempNumber > 0) {
    tempNumber = Math.floor(tempNumber / 5);
    count += tempNumber;
  }
  return count;
};
