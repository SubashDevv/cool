const msgSender=document.querySelector("#msgSender");
const msgBox=document.querySelector("#msgBox");
let msgCount=parseInt(localStorage.getItem(`msgCount`),10)||-1;
let keyIndex=0;
let accMsgCount=0;
let userId=Math.floor(Math.random()*5);
// localStorage.clear();
if(localStorage.length!=0)
{
for(let i=0;i<localStorage.length;i++)
{
    if(localStorage.key(i).slice(0,3)=="msg" && localStorage.getItem(`msg${accMsgCount}`)!==null)
    { 
    const newMsg=document.createElement("p");
    let userMsg=localStorage.getItem(`msg${accMsgCount}`);
    newMsg.innerText=`User: ${userMsg} `;
    msgBox.appendChild(newMsg);
    keyIndex+=1;
    accMsgCount+=1;
}
}   
}
msgSender.addEventListener("click",()=>{
    msgCount++;
    console.log(msgCount);
    console.log(msgCount);
    localStorage.setItem("msgCount",msgCount);

    const msg=document.querySelector("#msg").value;
    localStorage.setItem(`msg${localStorage.getItem(`msgCount`)}`,msg);
    msgCreate(msg);
  
})
function msgCreate(msg){
   const newMsg=document.createElement("p");
   newMsg.innerText=`User: ${msg} `;
   msgBox.appendChild(newMsg);
}
let refresher=setInterval(()=>{
    location.reload();
},6000);