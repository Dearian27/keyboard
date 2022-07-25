const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('wrapper-modal');

const btnClose = document.getElementById('btn-close');


btnOpen.addEventListener('click',() => {
    modal.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
}

btnClose.addEventListener('click',closeModal);