
//  DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const listItemContainer = document.querySelector('.list-item-container');
const btnContainer = document.querySelector('.btn-container');

// Add Task with Timestamp
addTaskBtn.addEventListener('click', () => {
  const timeStamp = new Date().toLocaleString();
  if (taskInput.value) {
    const div = document.createElement('div');
    div.classList.add('list-items');
    div.innerHTML = `
      <div class="taskBtn">
        <button class="circle-btn">
          <div class="circle"></div>
        </button>
        <p>${taskInput.value}</p>
        <p class="timeStamp">${timeStamp}</p>
      </div>
      <img src="./pencil-color-icon.webp" class="edit" alt="Edit">
      <img src="./free-icon-garbage-bin-10420.png" class="delete" alt="Delete">
    `;
    listItemContainer.appendChild(div);
    taskInput.value = '';
  } else {
    alert('Please add your task');
  }
});

//  Task Actions: Complete, Edit, Delete, Filter
listItemContainer.addEventListener('click', (e) => {
  const classType = e.target.className;
  const idType = e.target.id;

  // ✅ Mark as Completed
  if (classType === 'circle') {
    const taskBtn = e.target.closest('.list-items');
    const task = taskBtn.querySelector('p');
    task.style.textDecoration = 'line-through';
    const circleBtn = taskBtn.querySelector('.circle-btn');
    circleBtn.innerHTML = `<img src="./Tick Symbol - Tick S.png" alt="" class="tik-mark">`;
    taskBtn.classList.add('completed');
  }

  // ✏️ Edit Task
  if (classType === 'edit') {
    const listItem = e.target.closest('.list-items');
    const task = listItem.querySelector('p');
    const newTask = prompt('Enter your task:', task.innerText);
    if (newTask !== null) task.innerText = newTask;
  }

  // 🗑️ Delete Task
  if (classType === 'delete') {
    const listItem = e.target.closest('.list-items');
    listItem.remove();
  }

  // 🔍 Filter Tasks
  const listItems = document.querySelectorAll('.list-items');

  if (idType === 'all') {
    listItems.forEach(item => item.style.display = 'flex');
  }

  if (idType === 'completed') {
    listItems.forEach(item => {
      item.style.display = item.classList.contains('completed') ? 'flex' : 'none';
    });
  }

  if (idType === 'unCompleted') {
    listItems.forEach(item => {
      item.style.display = !item.classList.contains('completed') ? 'flex' : 'none';
    });
  }
});

// 🎨 Highlight Active Filter Button
btnContainer.addEventListener('click', (e) => {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.style.backgroundColor = '';
  });

  if (e.target.classList.contains('btn')) {
    e.target.style.backgroundColor = '#eab012';
  }
});



