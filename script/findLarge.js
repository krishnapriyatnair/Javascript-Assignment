
function findLarge(){
    var num1=prompt("Enter the first integer"); 
    var num2=prompt("Enter the second integer"); 

     if (isNaN(num1) || isNaN(num2) || num1== "" || num2== "") 
    {
      alert("Please enter valid numbers");
    }
    else if (num1 === num2) 
    {
      document.getElementById("ans").innerHTML="Both numbers are equal";
    } 
  
      else if (num1 >0 && num2 > 0 && num1 > num2)
     {
      document.getElementById("ans").innerHTML="The larger number is " + num1;
    } 
    else if (num1 >0 && num2 >0 && num1 < num2)
     {
      document.getElementById("ans").innerHTML="The larger number is " + num2;
    }
      else if (num1 <0 && num2 < 0 && num1 < num2) 
      {
        document.getElementById("ans").innerHTML="The larger number is " + num1;
        }
    else if (num1 <0 && num2 <0 && num2 < num1) 
    {
      document.getElementById("ans").innerHTML="The larger number is " + num2;
    } 
    else if (num1 <=0 && num2 >=0) 
    {
      document.getElementById("ans").innerHTML="The larger number is " + num2;
    } 
     else if (num1 >=0 && num2 <= 0) 
      {
        document.getElementById("ans").innerHTML="The larger number is " + num1;
        }
    else {
        alert("invalid entry");
  
    }
  }



 



