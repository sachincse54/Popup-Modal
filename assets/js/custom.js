function closeModal(modalContainer) {
    modalContainer.style.display = 'none';
}

const modalContainer1 = document.getElementById('modal-container-1');
const openModalBtn1 = document.getElementById('open-modal-btn');
const closeModalBtn1 = document.getElementById('close-modal-btn');

openModalBtn1.addEventListener('click', () => {
    modalContainer1.style.display = 'flex';
});

closeModalBtn1.addEventListener('click', () => {
    closeModal(modalContainer1);
});

const modalContainer2 = document.getElementById('modal-container-2');
const openModalOutsideBtn = document.getElementById('open-modal-outside-btn');
const closeModalOutsideBtn = document.getElementById('close-modal-outside-btn');

openModalOutsideBtn.addEventListener('click', () => {
    modalContainer2.style.display = 'flex';
});

closeModalOutsideBtn.addEventListener('click', () => {
    closeModal(modalContainer2);
});

// Close modal 2 when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === modalContainer2) {
        closeModal(modalContainer2);
    }
});