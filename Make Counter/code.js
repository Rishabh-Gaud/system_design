function makeCounter(initialValue = 0) {
// Your implementation
  let count = initialValue;
    return {
        increment: function () {
          count++;
          return count;
        },
        decrement: function) {
          count--;
          return count;
        },
        reset: function(){
          count = initialValue
          return count;
        }
}
module exports = makeCounter;
