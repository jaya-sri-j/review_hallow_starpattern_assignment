/*var a=parseInt(prompt("enter a number"));
for(let i=0; i<a; i++)
{
	for(let j=0; j<a; j++)
	{
		if(i==0 || j==0 || i==a-1 ||j==a-1)
		{
		document.write("*")
		}
        else
		{
		 document.write(" ")
		}
	}
	document.write("<br>")
}*/
//hallow square
var number =parseInt(prompt("enter number")); 
var sum="";
for (i=0;i<number;i++) 
{ 
  
  for (j=0;j<number;j++) 
  { 
    if (i==0||i==number-1) 
	{
      sum =sum+"*";
    }
    else 
	{
      if (j==0||j==number-1)
	   {
        sum=sum+"*";
      }
      else 
	  {
        sum=sum+" ";
      }
    }
  }
  sum=sum+"\n";
}
console.log(sum);