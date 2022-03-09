function perfectSquares(l, r){
 
  
    for (let i = l; i <= r; i++)
    {
        if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
            console.log(i + " ");
    }
}

let l = 1;
let r = 400;
perfectSquares(l, r)
 