const selectedNum = document.querySelector('#selectedNum');
const stars = document.querySelectorAll('li');
const submit = document.querySelector('.btn');
const card = document.querySelector('.card');
const card2 = document.querySelector('.card2');

for(let i=0; i<stars.length; i++){
    stars[i].addEventListener('click',()=>{
        removeToggled();
        const num = stars[i].textContent;
        selectedNum.innerText = `You selected ${num} out of 5`;
        stars[i].classList.add('toggled');
    })
}

const removeToggled = ()=>{
    stars.forEach(star=>{
        star.classList.remove('toggled');
    })
}

submit.addEventListener('click',()=>{
    card.style.display='none';
    card2.style.display='block';
})











