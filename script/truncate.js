function truncate()
{
    var str= document.getElementById("string").value;
  var  len=str.length;
   var num=prompt("Give the specified length to truncate");
    var out=[];
  if(len>num){
    out= str.slice(0, num);
   
  }
  else
  {
    out=str;  
    
  }
  document.getElementById("ans").innerHTML="The truncated string is : " + out.fontcolor( "green" );
  document.getElementById("ans").style.color="blue";
}
