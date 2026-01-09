// Getting our DOM element variables
const addTaskBtn = document.querySelector('.addTaskBtn');
const modal = document.querySelector('#addTaskModal');
const scrollArrow  = document.querySelector('.scrollArrow');
const taskArea = document.querySelector('#task-section');




//Methods



addTaskBtn.addEventListener('click', function () {
  modal.showModal();
  // document.body.classList.add('modal-open');
});

