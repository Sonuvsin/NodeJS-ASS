var getName = null;

while (getName === null || !isNaN(getName)){
  getName = prompt("What is your name ? ");

  if(getName == 'Alice' || getName == 'Bob'){
    document.write("Hello" + getName + "</br> How are you today?");
  }
}