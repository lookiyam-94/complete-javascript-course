'use strict';

// get modal, overlay, close modal button, and show modal buttons
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// open modal when show modal button is clicked
// for(let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener('click', function() {
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     });
//     // close modal when close modal button is clicked
//     btnCloseModal.addEventListener('click', function() {
//         // remove hidden class from modal and overlay
//         modal.classList.add('hidden');
//         overlay.classList.add('hidden');
//     });
//     // close modal when overlay is clicked
//     overlay.addEventListener('click', function() {
//         // add hidden class to modal and overlay
//         modal.classList.add('hidden');
//         overlay.classList.add('hidden');
//     });
//     // close modal when escape key is pressed
//     document.addEventListener('keydown', function(e) {
//         // if escape key is pressed and modal is not hidden, add hidden class to modal and overlay
//         if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
//             modal.classList.add('hidden');
//             overlay.classList.add('hidden');
//         }
//     });
// }

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});