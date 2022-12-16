const left = document.querySelector(".arrowLeft");
const right = document.querySelector(".arrowRight") ;
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

// that's project its gonna simply change the images multiplaing the translateX with the width, knowing that our images have 60vw each, we have 
// to multiplaing this with his position(slideNumber), that will be increase every time you click, to  don't come back to the same image  



let sliderNumber = 1;            // initially its 1 keep this on mind
let length = image.length

for(let i = 0; i < length; i++){
    const div = document.createElement('div');      //for each image that's will creat another button
    div.className = 'button';
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')   //only change the bgColor to white
 buttons[0].style.backgroundColor = 'white';

const resetbg = () => {
    buttons.forEach(button=>{
      button.style.backgroundColor = 'transparent';  //only change the bgColor to transparent
    })
}


 buttons.forEach((button, i ) => {
    button.addEventListener('click',()=>{
        resetbg()
        slider.style.transform = `translateX(-${i * 60}vw)`;   
        sliderNumber = i + 1;
        button.style.backgroundColor = 'white';
    })
 })

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * 60}vw)`   //this function will move on X 60vw and increase sliderNumber plus one
    sliderNumber++;   
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(sliderNumber -2) * 60}vw)` // same but to the other side 
    sliderNumber--;   
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0vw)` // that one will send the translateX to initial position 
        sliderNumber = 1; 
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 60}vw)` // to get the last slide this will take the length value, in this case is three and multiply per 60vw
   
        sliderNumber = length; 
}

const changeColor = () => {
    resetbg();
    buttons[sliderNumber - 1].style.backgroundColor = 'white';
}

right.addEventListener('click', ()=>{
    sliderNumber < length ? nextSlide(): getFirstSlide() //while the sliderNumber was smaller than the length he goes to next slide if it's not, go to the first
    changeColor();
});

left.addEventListener('click', ()=>{
    sliderNumber > 1 ? prevSlide() : getLastSlide(); // while the sliderNumber was bigger than one he goes to the previous slide if it's not, go to the last
    changeColor();
})

