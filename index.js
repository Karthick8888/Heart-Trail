 const bodyel=document.querySelector("body");
 bodyel.addEventListener("mousemove",(event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const spanel=document.createElement("span");
    spanel.style.left=xpos+"px";
    spanel.style.top=ypos+"px";
    const size=Math.random()*100;
    spanel.style.height=size+"px";
    spanel.style.width=size+"px";
    bodyel.append(spanel);
    setTimeout(()=>{
        spanel.remove();
    },3000);
 });