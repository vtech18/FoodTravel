var arr=["0.jpg.jpg","1.jpg.jpg","2.jpg.jpg","3.jpg.jpg","4.jpg.jpg","5.jpg.jpg","6.jpg.jpg","7.jpg.jpg","8.jpg.jpg","9.jpg.jpg","10.jpg.jpg","11.jpg.jpg",];
var i=0;
function fun()
{
  if(i>=7)
  {
    i=0;
  }
  document.getElementById("header").style.backgroundImage=`url("../Assets/food/${arr[i]}")`
  i++;
  setTimeout(fun,2000);
}

function left()
{
  if(i==0)
  {
    i=6;
  }
  else i--;
  document.getElementById("header").style.backgroundImage=`url("../Assets/food/${arr[i]}")`

}

function right()
{
  if(i==6)
  {
    i=0;
  }
  else i++;
  document.getElementById("header").style.backgroundImage=`url("../Assets/food/${arr[i]}")`

}
var img=document.getElementsByClassName("images")
function openImage(img)
{
  console.log(img)
   //var imgsc=document.getElementsByClassName("images").value;
   document.getElementById("displayImage").removeAttribute("style")
   document.getElementById("popImage").setAttribute("src",`../Assets/food/${img}.jpg.jpg`)
   //document.getElementById("popImage").setAttribute('src',imgsc)
     
}
function closeImage()
{ 
   document.getElementById("displayImage").style.display="none"
   document.getElementById("displayImage").style.cursor="arrow"
  // document.getElementById("popImage").setAttribute("src",`../Assets/food/${img}.jpg.jpg`)
  
   
     
}
