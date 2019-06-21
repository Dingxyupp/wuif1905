window.onload=function () {
    let thumb=document.querySelectorAll('img[id]')
    let prevThumb=0;
    for(let i=0;i<thumb.length;i++){
        thumb[i].onclick=function () {
            thumb[prevThumb].style.opacity="0.7";
            thumb[i].style.opacity="1";
            prevThumb=i;
        }
    }

    let textarea=document.querySelector('xx')
     textarea.onkeydown=function () {
        
    }
}