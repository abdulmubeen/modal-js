'use strict';

const openModal = () =>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click',openModal);

btnCloseModal.addEventListener('click',hideModal)
overlay.addEventListener('click',hideModal);

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
});