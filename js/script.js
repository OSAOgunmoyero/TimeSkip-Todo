// Getting our DOM elements
const addTaskBtn = document.querySelector('.addTaskBtn');
const modal = document.querySelector('#addTaskModal');





//Methods
addTaskBtn.addEventListener('click', function () {
  modal.showModal();
});

