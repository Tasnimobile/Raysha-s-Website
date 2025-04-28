// This file is intentionally left blank.

// Get modal elements
const modal = document.getElementById('photo-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open modal when a gallery item is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show the modal
        modalImage.src = item.src; // Set the modal image to the clicked image
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    modalImage.src = ''; // Clear the modal image to prevent it from showing blank
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide the modal
        modalImage.src = ''; // Clear the modal image
    }
});