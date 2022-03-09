var n = prompt("Please enter a number", "Any Number 1-9");
var choose = prompt("Please enter a number 1 for factorial 2 for sum", "1-2");
if(!isNaN(n)){
if(choose == 1){
      function factorial(x) 
      { 

        if (x === 0){
          return 1;
       }
        return x * factorial(x-1);

      }
      x = factorial(n);
      alert(x);
}else if(choose == 2){
        var x = ((parseInt(n)+1) *n) /2;
          if(x % 5 == 0 || x % 3 == 0){
            alert(x);
          }else{
            alert('Not a multiple');
          } 
  }else{
     alert('Please enter a valid number');
  }
}else{
  alert('Please enter a number');
}