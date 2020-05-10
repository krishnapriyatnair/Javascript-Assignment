function prime_check(){
    var arr=[];
     arr=document.getElementById("array").value;
    var ar=arr.split(",");
    var a0=ar[0];
    var x=true;
         if(a0==1||a0==0){
            document.getElementById("ans").innerHTML= a0+ " is neither Prime nor Composite ";
            document.getElementById("ans").style.color= "red" ;
        }

        else if (isNaN(a0))
        {
            alert("Array must be numbers");
        }
    
        else if(a0==2)
    {
      document.getElementById("ans").innerHTML="The first element of array is "+ a0 +" and is a prime number";
      document.getElementById("ans").style.color= "green" ;
    }
    else{
            for(var i=2;i<a0;i++)
            {
                if(a0%i==0 )
                {
                    x=false;
                    document.getElementById("ans").innerHTML="The first element of array is "+ a0+" and is not a prime number";
                    document.getElementById("ans").style.color= "blue" ;
                    break;
                 
                }
                else{
                    
                 
                    document.getElementById("ans").innerHTML="The first element of array is "+ a0 +" and is a prime number";
                    document.getElementById("ans").style.color= "green" ;
                    x=true;
                }
                
            }
            return x;
        }
          
}