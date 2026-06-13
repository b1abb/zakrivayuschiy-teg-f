const saveButton = document.querySelector('.memory-save');
const saveDialog = document.querySelector('.save-dialog');

saveButton.addEventListener('click', () => {
  saveDialog.showModal();
});
