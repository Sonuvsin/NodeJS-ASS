function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        if(i%3 == 0 || i%5 == 0)
        total += i;
      }
      return total;
  }
  
  function run(){
    val = document.getElementById("val").value;
    document.getElementById("results").innerHTML=val+": "+numberSum(val)
    }
  