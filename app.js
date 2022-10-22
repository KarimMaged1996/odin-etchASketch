//Global Variables
const btn16=document.querySelector('.sixteen');
const btn20=document.querySelector('.twenty');
const btn25=document.querySelector('.twentyFive');
const btn30=document.querySelector('.thirty');
const btnErase=document.querySelector('.erase')
const container=document.querySelector('.container');
let size;
let divs=[];

for (let i=0; i<(16**2); i++){
    divs[i]=document.createElement('div');
    divs.forEach((elem)=>elem.classList.add('initialSize'));
    container.appendChild(divs[i]);
}

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
    else if (size===30){
        container.innerHTML='';
        for (let i=0; i<(30**2); i++){
            divs[i]=document.createElement('div');
            divs.forEach((elem)=>elem.removeAttribute('class'));
            divs.forEach((elem)=>elem.classList.add('size30'));
            container.appendChild(divs[i]);
        }
    } 
}
//helper event listiners
btn16.addEventListener('click',()=>{size=16});
btn20.addEventListener('click',()=>{size=20});
btn25.addEventListener('click',()=>{size=25});
btn30.addEventListener('click',()=>{size=30});

//main event listiners
btn16.addEventListener('click',getSize);
btn20.addEventListener('click',getSize);
btn25.addEventListener('click',getSize);
btn30.addEventListener('click',getSize);

container.childNodes.forEach((elem)=>{
    elem.addEventListener('mouseover',function(){
        elem.classList.add('black');
    })
})


function fireTheEvent(){
container.childNodes.forEach((elem)=>{
    elem.addEventListener('mouseover',function(){
        elem.classList.add('black');
    })
})}

btn16.addEventListener('click',fireTheEvent);
btn20.addEventListener('click',fireTheEvent);
btn25.addEventListener('click',fireTheEvent);
btn30.addEventListener('click',fireTheEvent);

function erase(){
    for(i=0;i<divs.length;i++){
       divs[i].classList.remove('black');
    }
        }
btnErase.addEventListener('click',erase);