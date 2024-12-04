const arrowSet=document.querySelector(".nextPageBtn");
const arrowCheck=document.querySelector(".nextPage");
const signInPop=document.querySelector("#signIn");
const signInBox=document.querySelector("#signInBox");
const logIn=document.querySelector("#login");
const logInMsg=document.querySelector("#loginMsg");
const signInMsg=document.querySelector("#signInMsg");
const backLogInBox=document.querySelector("#backLogInBox");
// localStorage.setItem(`msgCount`,-1);
arrowSet.addEventListener("click",()=>{

       const userName=document.querySelector(".nameBox").value;
    const password=document.querySelector(".passBox").value;
    if(userName!="" && password!=""){
        localStorage.setItem(userName,password);
        signInMsg.innerText="Registered sucessfully"
        signInMsg.style.color="green"; 
    }
else{
signInMsg.innerText="Enter correctly"
signInMsg.style.color=" rgb(202, 8, 8)";
}
})
signInBox.addEventListener("click",()=>{
    signInPop.style.zIndex=2;
    signInPop.style.display="flex";
    logIn.style.display="none";

})
arrowCheck.addEventListener("click",()=>{
    const name=document.querySelector(".nameBox2").value;
    const password=document.querySelector(".passBox2").value;
    if(localStorage.getItem(name)===password)
    {
      window.location.href="msg.html"
    }
    else{
logInMsg.innerText="Invalid input";
logInMsg.style.color=" rgb(202, 8, 8)";
    }

});
backLogInBox.addEventListener("click",()=>{
    signInPop.style.display="none";
    logIn.style.display="flex";
})
