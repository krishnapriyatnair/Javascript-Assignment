function squaresum()
{
    var arr=[];
    var  ar=document.getElementById("array").value;
var arr=ar.split(",");
var square=0;
var sum=0;
        for(var i=0;i<arr.length;i++)
        {
        square=arr[i]*arr[i];
            sum=sum+square;
        }
    
    document.getElementById("ans").innerHTML="The sum of squares of the elements of the array is  "+sum;
    document.getElementById("ans").style.color= "blue" ;
}