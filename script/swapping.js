function swap()
    {
    var str= document.getElementById("string").value;
    var up=str.toUpperCase();
    var arr = up.split(' ');
    var newarry=[];
    var out=[];
    for( var i=0;i<arr.length;i++)
    {
        
        newarry.push(arr[i].charAt(0).toLowerCase()+arr[i].slice(1));
   
         
      
    }
    out= newarry.join(' ');
    document.getElementById("ans").innerHTML=out;
    document.getElementById("ans").style.color="green";
}


  
        
    
