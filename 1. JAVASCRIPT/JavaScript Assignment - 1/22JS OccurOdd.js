var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(array.filter(function(el, ind){
  return ind % 2 === 0;
}));
