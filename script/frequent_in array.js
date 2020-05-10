function freq()
{
    var arr=[];
    var  ar=document.getElementById("array").value;
var arr=ar.split(",");
var count=0;
 var com=1;
 var element;

 for(var i=0;i<arr.length;i++)
 {
     for(var j=i;j<arr.length;j++)
     {
        if(arr[i]==arr[j])
        {
            count++;
        }
        if(com<count)
        {
            com=count;
            element=arr[i];
        }
       
        
     }
count=0;
 }
 if(com>1)
 {
    document.getElementById("ans").innerHTML="The repeating element is "+element +" and occurs "+com+"  times";
    document.getElementById("ans").style.color= "blue" ;
}
 else
 {
    document.getElementById("ans").innerHTML="No element repeats"; 
    document.getElementById("ans").style.color= "red" ; 
 }
}