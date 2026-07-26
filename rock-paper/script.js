let yourscore =0;
let compscore =0
let msg = document.getElementById('msg')
const choices = document.querySelectorAll('.choice')
let msg1 = document.getElementById("userchoice")
let msg2 = document.getElementById('Computerchoice')
let msg3 =document.getElementById('co')
let msg4 = document.getElementById('u')
const genratechoice = () => {
 const options = ["rock" , "paper", "scissors"]
 let opt = Math.floor(Math.random() * 3)

return options[opt]
}


const playgame = (userid) =>{
const compchocie = genratechoice()
msg2.textContent = `Computer choice : ${compchocie}`
 
 
let userwin = true;
 if (userid === compchocie) {
       
         msg.textContent = "It's a Draw!";
        return;
    }
if ( userid === " "){
        console.log("select something")
     }
 else{
     
     if(userid === "rock"){
         if(compchocie == "paper"){
             userwin = false
         }else{
            userwin =true
         }
     }
    
    else if(userid === "paper"){
     if(compchocie === "scissors"){
        userwin =false;
        
     }else{
         userwin =true
     }
  }
else if(userid ==="scissors"){
         if(compchocie =="rock"){
             userwin =false;
         }else{
             userwin =true
         }
}

 }
 if(userwin === true){
    console.log("You Win")
   msg.textContent = "You Win";
   yourscore++
   msg4.textContent = yourscore
   
 }else{
    console.log("You Loose")
    msg.textContent = "You  Loose";
    compscore++
    console.log(compscore)
    msg3.textContent = compscore
 }
}


    
choices.forEach((choice)=>{
let userid = choice.getAttribute("id")
choice.addEventListener('click', () =>{
    msg1.textContent = `Your Choice : ${userid}`
    console.log( 'Your Choice' ,userid)
     playgame(userid)
})

})
