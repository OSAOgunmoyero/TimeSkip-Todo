// Getting our DOM element variables
const addTaskBtn = document.querySelector('.addTaskBtn');
const modal = document.querySelector('#addTaskModal');
const newTaskInput = document.querySelector('#task-name');
const newTaskDescription = document.querySelector('#task-details');
const taskModalXBtn = document.querySelector('.close-modal-btn');



//Event Listeners

// For Modal
addTaskBtn.addEventListener('click', function () {
  newTaskInput.value = '';
  newTaskDescription.value = '';
  modal.showModal();
  document.body.classList.add('modal-open');
});

taskModalXBtn.addEventListener('click', function () {
  modal.close();
  document.body.classList.remove('modal-open');
})
