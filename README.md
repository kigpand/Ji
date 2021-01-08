## 포트폴리오 사이트

### 기능 구현
* JavaScript로 5개의 이미지,텍스트 FadeIn,Out 구현
```js
const fadeOut = () =>{
    HomeImg.style.opacity = 1;
    HomeText.style.opacity = 1;
    let count = 1;
    const flag = false;
    const fadeOutIntervel = setInterval(()=>{
        HomeImg.style.opacity -= 0.03;
        HomeText.style.opacity -= 0.03;
        count -= 0.03;
        if(count<0){
            HomeArrayCount++;
            clearInterval(fadeOutIntervel);
            timecontroller(flag);
        }
    },100);
}

const fadeIn = () =>{
    if(HomeArrayCount>HomeImgArray.length-1){ HomeArrayCount = 0};
    HomeImg.src = HomeImgArray[HomeArrayCount];
    HomeText.innerHTML = HomeTextArray[HomeArrayCount];
    HomeImg.style.opacity = 0;
    HomeText.style.opacity = 0;
    const flag = true;
    let float = parseFloat(HomeImg.style.opacity);
    const fadeInIntervel = setInterval(()=>{
        float+= 0.03;
        HomeImg.style.opacity = float;
        HomeText.style.opacity = float;
        if(float>1){
            clearInterval(fadeInIntervel);
            timecontroller(flag);
        }
    },100);
}

const timecontroller = (flag) =>{  // flag의 값에 따라 fadeIn,Out 구분
    if(flag === true){
        setTimeout(()=>{
            fadeOut();
        },2000)
    }
    else{
        fadeIn();
    }
}
```

* html data속성으로 클릭하는 menu로 뷰 이동
<img src ="https://user-images.githubusercontent.com/70279943/103476955-5569e500-4dfd-11eb-830d-52c7c29b0b68.PNG" width = "300px" />

```js
navBtn.addEventListener("click",(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(!link){
        return;
    }else{
        const scroll = document.querySelector(link);
        scroll.scrollIntoView({ behavior : "smooth" });
    }
})
```

###  2021-01-08 익스플로러 지원 적용
