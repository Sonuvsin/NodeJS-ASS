var getName = null;

while (getName === null || !isNaN(getName)){
  getName = prompt("What is your name ? ");

  if (getName === null || !isNaN(getName)){
    alert("Invalid name, please try again");
  }else{
    document.write("Hello ", getName);
  }
}