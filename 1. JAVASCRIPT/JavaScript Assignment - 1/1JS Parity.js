
// Javascript program to find parity
// of an integer
 
function getParity(n)
{
    var parity = false;
    while(n != 0)
    {
        parity = !parity;
        n = n & (n - 1);
    }
    return parity;
}
     
// Driver code
var n = 9;
document.write("Parity of no " + n + " = " +
              (getParity(n) ? "odd": "even"));
  