window.onload=function() {
    //标题变色
    let DjTop = document.getElementsByClassName('headbox');
    let h1 = DjTop[0].getElementsByTagName('h1');
    h1[0].onmouseenter = function () {
        h1[0].style.color = 'red';
    }
    h1[0].onmouseleave = function () {
        h1[0].style.color = 'white';
    }

    //底部加线
    let list = document.getElementsByClassName('list');
    let li = list[0].getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].onmouseenter = function () {
            li[i].style.borderBottom = '1px solid #333333';
        }
        li[i].onmouseleave = function () {
            li[i].style.borderBottom = 'none';
        }
    }

    //做一个爱设计的男子
    // let essay=document.getElementsByClassName('essay');
    let li1 = document.querySelectorAll('.essay>li');
    li1.forEach(function (elem, index) {
        elem.onmouseenter = function () {
            for (let i = 0; i < li1.length; i++) {
                li1[i].classList.remove('sq');
            }
            this.classList.add('sq');
        }
    })

    //轮播图右按钮(1)
    // let rightBtn=document.querySelector('.rightBtn')
    // let picture=document.querySelectorAll('.lbt>li')
    // let li2 = document.querySelectorAll('.circul>li');
    // // console.log(rightBtn);
    // let index=0;
    // rightBtn.onclick=function(){
    //     index++;
    //     if(index==picture.length){
    //         return index=0;
    //     }
    //     picture.forEach(function (elem){
    //         elem.style.zIndex = 1;
    //     })
    //     li2.forEach(function (elem) {
    //         elem.classList.remove('oneBotton')
    //     })
    //     li2[index].classList.add('oneBotton')
    //     picture[index].style.zIndex = 999;
    // }
    //轮播图左右按钮,动画效果(2)
    let current = 0, next = 0;
    let rightBtn = document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let picture = document.querySelectorAll('.lbt>li');
    let w = picture[0].offsetWidth;
    rightBtn.onclick = function () {
        next++;
        if(next==picture.length){
            next=0;
        }
        picture[next].style.left=w+'px';
        animate(picture[current], {left: -w})
        animate(picture[next], {left: 0})
        current = next;
        li2.forEach(function (elem) {
            elem.classList.remove('oneBotton');
        })
        li2[next].classList.add('oneBotton');
    }
    leftBtn.onclick=function(){
        next--;
        if(next<0){
            next=picture.length-1;
        }
        picture[next].style.left=-w+'px';
        animate(picture[current], {left: w})
        animate(picture[next], {left: 0})
        current = next;
        li2.forEach(function (elem) {
            elem.classList.remove('oneBotton');
        })
        li2[next].classList.add('oneBotton');
    }
    //点击圆点切换图片
    let li2 = document.querySelectorAll('.circul>li');
    for(let i=0;i<li2.length;i++) {
        li2[i].onclick = function (){
            next=i;
            // picture[next].style.left=w+'px';
            // picture[next].style.right=-w+'px';
            if(next<current){
                picture[next].style.left=-w+'px';
                animate(picture[current], {left:w})
                animate(picture[next], {left:0})
            }else{
                picture[next].style.left=w+'px';
                animate(picture[current], {left:-w})
                animate(picture[next], {left:0,})
            }
            current = next;
            li2.forEach(function (elem) {
                elem.classList.remove('oneBotton')
            })
            this.classList.add('oneBotton');
        }
    }

    //轮播图左按钮
    // let Index = picture.length;
    // leftBtn.onclick = function () {
    //     Index--;
    //     if (Index == 0) {
    //         return Index = picture.length;
    //     }
    //     picture.forEach(function (elem) {
    //         elem.style.zIndex = 1;
    //     })
    //     picture[Index].style.zIndex = 999;
    // }
    //三秒换图
    let lbt = document.querySelectorAll('.lbt')
    let t = setInterval(rightBtn.onclick, 3000);
    rightBtn.onmouseleave=function () {
        t = setInterval(rightBtn.onclick, 3000);
    }
    rightBtn.onmouseenter=function(){
        clearInterval(t);
    }
    leftBtn.onmouseleave=function () {
        t = setInterval(leftBtn.onclick, 3000);
    }
    leftBtn.onmouseenter=function(){
        clearInterval(t);
    }
    for(let i=0;i<lbt.length;i++) {
        lbt[i].onmouseenter = function () {
            clearInterval(t);
        }
        lbt[i].onmouseleave = function () {
            t = setInterval(rightBtn.onclick, 3000);
        }
    }
    //点击圆点切换页面
    // let circul = document.querySelectorAll('.circul>li')
    // for (let i = 0; i < circul.length; i++) {
    //     circul[i].onclick = function () {
    //         circul.forEach(function (elem) {
    //             elem.classList.remove('oneBotton')
    //         })
    //         picture.forEach(function (elem) {
    //             elem.style.zIndex = 1;
    //         })
    //         this.classList.add('oneBotton')
    //         picture[i].style.zIndex = 999;
    //     }
    //
    // }

    //按需加载页面
    let viewH=window.innerHeight;
    let imgs=document.querySelectorAll('.lazyload');
    let positionArr=[];
    imgs.forEach(function (elem) {
        let parent =elem.offsetParent;
        positionArr.push(parent.offsetTop+elem.offsetTop);
    })
    window.onscroll=function () {
        let scrolltop=document.documentElement.scrollTop || document.body.scrollTop
        for(let i=0;i<positionArr.length;i++){
            if(scrolltop+viewH >= positionArr[i]){
                if(!imgs[i].src){
                    imgs[i].src=imgs[i].getAttribute('aa');
                }
            }
        }
    }
}