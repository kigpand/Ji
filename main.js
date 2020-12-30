
const HomeImg = document.querySelector(".home_main");
const navBtn = document.querySelector("#navbar_btn");

const HomeImgArray = ["img/bg_1.jpg","img/bg_2.jpg","img/bg_3.jpg","img/bg_4.jpg"];
const HomeText = document.querySelector(".home_text_change");
const HomeTextArray = ["꿈꾸는 개발자","더 나은 개발자","앞서가는 개발자","성실한 개발자"];

const opening = document.querySelector("#opening");
const openingImg = document.querySelector(".opening_check_img");

let HomeArrayCount = 0;

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

const timecontroller = (flag) =>{
    if(flag === true){
        setTimeout(()=>{
            fadeOut();
        },2000)
    }
    else{
        fadeIn();
    }
}

const playFade =() =>{
    fadeIn();
}

const openingFade = () =>{
    const openingImg = document.querySelector(".opening_img");
    openingImg.style.opacity = 1 - window.scrollY / window.innerHeight;
}

const aboutAnimation = () =>{
    const introPicture = document.querySelector(".about_intro_picture");
    const introContent = document.querySelector(".about_intro_content");

    if(window.scrollY>=1300 && window.scrollY<=2100){

        introPicture.classList.remove("close");
        introContent.classList.remove("close");

        introPicture.classList.add("extend");
        introContent.classList.add("extend");
    }
    else{
        introPicture.classList.remove("extend");
        introContent.classList.remove("extend");

        introPicture.classList.add("close");
        introContent.classList.add("close");
    }
}

const navVisible = () =>{
    if(window.scrollY>=opening.offsetHeight){
        navBtn.style.visibility = "visible";
    }
    else{
        navBtn.style.visibility = "hidden";
    }
}

window.addEventListener("scroll",()=>{
    // 메뉴바 상태
    navVisible();
    openingFade();
    aboutAnimation();
})

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

openingImg.addEventListener("click",()=>{
    const scroll = document.querySelector("#home");
    scroll.scrollIntoView({behavior:"smooth"});
})



playFade();