console.log("hello world");

var n,k=6,ans;
var bgcolor=[];

var tr=document.querySelectorAll("td");
var r=document.querySelector("h1");
var option=document.querySelectorAll(".option");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var ncolor=document.querySelector("#ncolor");
var bar1=document.querySelector("#bar1");
var result=document.querySelector("#result");
function rand(n){
    for(var i=0;i<n;i++)
    {
        var a=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        var c=Math.floor(Math.random()*256);
        bgcolor[i]="rgb("+a+", "+b+", "+c+")";
        tr[i].style.backgroundColor=bgcolor[i];
        console.log(bgcolor[i]+"bgcolor");

    }
     ans=bgcolor[Math.floor(Math.random()*n)];
    r.innerHTML=ans;
   
}


rand(6);

   
        for(var i=0;i<k;i++)
        {
          
            tr[i].addEventListener("click",check);
         
        }
    
    function check(){
      
      
        if(this.style.backgroundColor==ans)
      {
        for(var i=0;i<k;i++)
         {
            tr[i].style.backgroundColor=ans; 
         }

     bar1.style.backgroundColor=ans;

     if(k==6){
        hard.style.backgroundColor=ans; 
     }
     else{
        easy.style.backgroundColor=ans;
     }
     var result=document.querySelector("#result");
            result.innerHTML="CORRECT!"
      }
        
        else
        {
         
            console.log(this.style.backgroundColor+"inmei");
            var result=document.querySelector("#result");
            result.innerHTML="TRY AGAIN!"
            this.style.backgroundColor= "#232323";
        }
    }

easy.addEventListener("click",function(){ 
for(var i=0;i<option.length;i++){
    option[i].style.backgroundColor="#232323";}
    result.innerHTML="";
  bar1.style.backgroundColor="rgb(3, 147, 167)";
    easy.style.backgroundColor="rgb(3, 147, 167)";
    easy.style.color="white";
    if(hard.style.backgroundColor!="white")
    {
        hard.style.backgroundColor="white";
        hard.style.color="rgb(3, 147, 167)";
    }
    
    

    rand(3);
    k=3;
   
});



hard.addEventListener("click",function(){
    result.innerHTML="";
    hard.style.backgroundColor="rgb(3, 147, 167)";
    hard.style.color="white";
    bar1.style.backgroundColor="rgb(3, 147, 167)";
    if(easy.style.backgroundColor!="white"){
        easy.style.backgroundColor="white";
        easy.style.color="rgb(3, 147, 167)";
    }
    rand(6);
    k=6; 
});

ncolor.addEventListener("click",function(){
    rand(k);
    result.innerHTML="";
    bar1.style.backgroundColor="rgb(3, 147, 167)";
    if(k==6){
        hard.style.backgroundColor="rgb(3, 147, 167)"; 
     }
     else{
        easy.style.backgroundColor="rgb(3, 147, 167)";
     }
});
