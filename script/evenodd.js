
    for(i=0;i<=15;i++)
    {
        if(i==0)
        {
            
            document.write("The current valve is  "+(i + " and is neither even or odd").fontcolor("red"));
            document.write("<br />");
        }
        else
        {
            if(i%2==0)
            {
                document.write("The current valve is "+(i +" and it is even.").fontcolor("blue"));
                document.write("<br />");

            }
            else{
                document.write("The current valve is "+(i +" and it is odd.").fontcolor("green"));
                document.write("<br />");
            }
        }
        
    }
