const scrollTop = document.getElementById('scroll__title') 
const scrollDown = document.getElementById('scroll__bottom')
const leftSlide = document.getElementById('slide__subtitle')
const slidePhoto = document.getElementById('slide__photo')

scrollTop.addEventListener('click',()=>{
    // window.scroll(0,1000)
    window.scroll({
        top:1000,
        behavior:'smooth'
    })
})
scrollDown.addEventListener('click',()=>{
    window.scroll({
        top:0,
        behavior:'smooth'
    })
})



const hOne = document.querySelector('p')
window.addEventListener('scroll', () => {
    let current = window.scrollY ;
    hOne.style.fontSize = `clamp(2rem, ${current}px,9rem )`;
  
})

const scrollBottom= document.getElementById('scroll__bottom')
window.addEventListener('scroll',()=>{
    let currentBottom = window.scrollY/22;
    console.log(currentBottom)
    scrollBottom.style.fontSize = `clamp(3rem, ${currentBottom}px,9rem)`;
})
window.addEventListener('scroll',()=>{
    let currentMargin = window.scrollY /5
    leftSlide.style.marginLeft = `${currentMargin}px`
    slidePhoto.style.marginRight =  `${currentMargin}px`
})

