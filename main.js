
const HomeImg = document.querySelector(".home_main");
const navBtn = document.querySelector("#navbar_btn");

const HomeImgArray = ["img/bg_1.jpg","img/bg_2.jpg","img/bg_3.jpg","img/bg_4.jpg"];
const HomeText = document.querySelector(".home_text_change");
const HomeTextArray = ["꿈꾸는 개발자","더 나은 개발자","앞서가는 개발자","성실한 개발자"];

const opening = document.querySelector("#opening");
const openingImg = document.querySelector(".opening_check_img");

let HomeArrayCount = 0;

// ------------------------------ Arrow Function Script -----------------------------------------
// const fadeOut = () =>{
//     HomeImg.style.opacity = 1;
//     HomeText.style.opacity = 1;
//     let count = 1;
//     const flag = false;
//     const fadeOutIntervel = setInterval(()=>{
//         HomeImg.style.opacity -= 0.05;
//         HomeText.style.opacity -= 0.05;
//         count -= 0.03;
//         if(count<=0){
//             HomeArrayCount++;
//             clearInterval(fadeOutIntervel);
//             timecontroller(flag);
//         }
//     },80);
// }

// const fadeIn = () =>{
//     if(HomeArrayCount>HomeImgArray.length-1){ HomeArrayCount = 0};
//     HomeImg.src = HomeImgArray[HomeArrayCount];
//     HomeText.innerHTML = HomeTextArray[HomeArrayCount];
//     HomeImg.style.opacity = 0;
//     HomeText.style.opacity = 0;
//     const flag = true;
//     let float = parseFloat(HomeImg.style.opacity);
//     const fadeInIntervel = setInterval(()=>{
//         float+= 0.05;
//         HomeImg.style.opacity = float;
//         HomeText.style.opacity = float;
//         if(float>=1){
//             clearInterval(fadeInIntervel);
//             timecontroller(flag);
//         }
//     },80);

// }

// const timecontroller = (flag) =>{
//     if(flag === true){
//         setTimeout(()=>{
//             fadeOut();
//         },1000)
//     }
//     else{
//         fadeIn();
//     }
// }

// window.addEventListener("scroll",()=>{
//     const openingImg = document.querySelector(".opening_img");
//     console.log("스크롤");
//     openingImg.style.opacity = 1 - window.scrollY / window.innerHeight;
//     if(window.scrollY>=opening.offsetHeight){
//         navBtn.style.visibility = "visible";
//     }
//     else{
//         navBtn.style.visibility = "hidden";
//     }
// })

// navBtn.addEventListener("click",(event)=>{
//     const target = event.target;
//     const link = target.dataset.link;
//     if(!link){
//         return;
//     }else{
//         const scroll = document.querySelector(link);
//         scroll.scrollIntoView({ behavior : "smooth" });
//     }
// })

// openingImg.addEventListener("click",()=>{
//     const scroll = document.querySelector("#home");
//     scroll.scrollIntoView({ behavior: "smooth" });
// })


// fadeIn();

// --------------------------------------------------------------------------------

function fadeOut(){
    HomeImg.style.opacity = 1;
    HomeText.style.opacity = 1;
    let count = 1;
    const flag = false;
    const fadeOutIntervel = setInterval(function(){
        HomeImg.style.opacity -= 0.05;
        HomeText.style.opacity -= 0.05;
        count -= 0.03;
        if(count<=0){
            HomeArrayCount++;
            clearInterval(fadeOutIntervel);
            timecontroller(flag);
        }
    },80);
}

function fadeIn(){
    if(HomeArrayCount>HomeImgArray.length-1){ HomeArrayCount = 0};
    HomeImg.src = HomeImgArray[HomeArrayCount];
    HomeText.innerHTML = HomeTextArray[HomeArrayCount];
    HomeImg.style.opacity = 0;
    HomeText.style.opacity = 0;
    const flag = true;
    let float = parseFloat(HomeImg.style.opacity);
    const fadeInIntervel = setInterval(function(){
        float+= 0.05;
        HomeImg.style.opacity = float;
        HomeText.style.opacity = float;
        if(float>=1){
            clearInterval(fadeInIntervel);
            timecontroller(flag);
        }
    },80);
}

function timecontroller(flag){
    if(flag === true){
        setTimeout(function(){
            fadeOut();
        },1000)
    }
    else{
        fadeIn();
    }
}

window.addEventListener("scroll",function(){
    const openingImg = document.querySelector(".opening_img");
    openingImg.style.opacity = 1 - window.pageYOffset / window.innerHeight;
    if(window.window.pageYOffset>=opening.offsetHeight){
        navBtn.style.visibility = "visible";
    }
    else{
        navBtn.style.visibility = "hidden";
    }
})

navBtn.addEventListener("click",function(event){
    const target = event.target;
    const link = target.dataset.link;
    if(!link){
        return;
    }else{
        const scroll = document.querySelector(link);
        scroll.scrollIntoView({ behavior : "smooth" });
    }
})

openingImg.addEventListener("click",function(){
    const scroll = document.querySelector("#home");
    scroll.scrollIntoView({ behavior: "smooth" });
})

fadeIn();