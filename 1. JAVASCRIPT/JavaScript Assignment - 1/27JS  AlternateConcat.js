let a = ['a','b','c'];
let b = [1, 2, 3];

var newList = function(a,b)
{
  let l = a.length+b.length;
  let r = [];
  let j=0,k=0;
  for(let i=0; i<l;i++) {
    if(i%2==0) {
      r[i]=a[j++];
    } else {
      r[i]=b[k++];
    }
  }
  return r;
}

console.log(newList(a,b));