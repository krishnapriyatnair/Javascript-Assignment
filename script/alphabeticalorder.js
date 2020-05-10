function order()
    {
    var str= document.getElementById("string").value;
    var arr = str.split(',');
    var x;
    for (x in arr)
    {
       for(var i=0;i<arr.length;i++){
                for(var j=i+1;j<arr.length;j++)
                {
                if(arr[j].toLowerCase()<arr[i].toLowerCase())
                {
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
                }
        
                }
            }
          
        }
        document.getElementById("visi").style.visibility="visible";
           document.getElementById("demo").innerHTML = arr;
           document.getElementById("demo").style.color="green";
    }
