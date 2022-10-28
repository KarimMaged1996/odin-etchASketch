//Global Variables
const btn16=document.querySelector('.sixteen');
const btn20=document.querySelector('.twenty');
const btn25=document.querySelector('.twentyFive');
const btn40=document.querySelector('.fourty');
const btnErase=document.querySelector('.erase')
const container=document.querySelector('.container');
const colorful=document.querySelector('.colorful');
let size;
let divs=[];
// for loop to the the initial size with 16
for (let i=0; i<(16**2); i++){
    divs[i]=document.createElement('div');
    divs.forEach((elem)=>elem.classList.add('initialSize'));
    container.appendChild(divs[i]);
}

//the function that changes the size of the elements
function getSize(){
    if (size===16){
        container.innerHTML='';
        for (let i=0; i<(16**2); i++){
            divs[i]=document.createElement('div');
            divs.forEach((elem)=>elem.removeAttribute('class'));
            divs.forEach((elem)=>elem.classList.add('size16'));
            container.appendChild(divs[i]);
        }
    }
    else if (size===20){
        container.innerHTML='';
        for (let i=0; i<(20**2); i++){
            divs[i]=document.createElement('div');
            divs.forEach((elem)=>elem.removeAttribute('class'));
            divs.forEach((elem)=>elem.classList.add('size20'));
            container.appendChild(divs[i]);
        }
    } 
    else if (size===25){
        container.innerHTML='';
        for (let i=0; i<(25**2); i++){
            divs[i]=document.createElement('div');
            divs.forEach((elem)=>elem.removeAttribute('class'));
            divs.forEach((elem)=>elem.classList.add('size25'));
            container.appendChild(divs[i]);
        }
    } 
    else if (size===40){
        container.innerHTML='';
        for (let i=0; i<(40**2); i++){
            divs[i]=document.createElement('div');
            divs.forEach((elem)=>elem.removeAttribute('class'));
            divs.forEach((elem)=>elem.classList.add('size40'));
            container.appendChild(divs[i]);
        }
    } 
}
//events to assign the value of the variable size
btn16.addEventListener('click',()=>{size=16});
btn20.addEventListener('click',()=>{size=20});
btn25.addEventListener('click',()=>{size=25});
btn40.addEventListener('click',()=>{size=40});

//events to change the size when the button is clicked
btn16.addEventListener('click',getSize);
btn20.addEventListener('click',getSize);
btn25.addEventListener('click',getSize);
btn40.addEventListener('click',getSize);

//event to make the hovering functionality for the initial case
container.childNodes.forEach((elem)=>{
    elem.addEventListener('mouseover',function(){
        elem.classList.remove('white');
        elem.classList.add('black');
    })
})

//function and event listiners to make the hover functionality work
//after a button is clicked
function fireTheEvent(){
container.childNodes.forEach((elem)=>{
    elem.addEventListener('mouseover',function(){
        elem.classList.remove('white');
        elem.classList.add('black');
    })
})}

btn16.addEventListener('click',fireTheEvent);
btn20.addEventListener('click',fireTheEvent);
btn25.addEventListener('click',fireTheEvent);
btn40.addEventListener('click',fireTheEvent);

//function and event for the erase button
function erase(){
    for(i=0;i<divs.length;i++){
       divs[i].classList.add('white');
    }
        }
btnErase.addEventListener('click',erase);

//function and event for the colorful button
function makeColors(){
    container.childNodes.forEach((elem)=>{
        elem.addEventListener('mouseover',function(){
            let colors=['red','green','blue','purple','yellow','orange']
            elem.classList.add(colors[Math.round((Math.random()*6))]);
    })
    })}

    colorful.addEventListener('click',makeColors);