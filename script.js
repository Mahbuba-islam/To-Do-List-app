const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task')
 const timeStamp = new Date().toLocaleString()
    addTaskBtn.addEventListener('click', () => {
      if(taskInput.value){
     const listItemContainer = document.querySelector('.list-item-container')
     const div = document.createElement('div')
     div.classList.add('list-items')
     div.innerHTML = `
    <div class="taskBtn"><button onclick="completedTask(this)" class="circle-btn"><div class="circle" ></div>
      </button> <p>${taskInput.value}</p>  <p class="timeStamp">${timeStamp}</p>
    </div> 
   
 <img src="./pencil-color-icon.webp" class="edit" alt="">
    <img src="./free-icon-garbage-bin-10420.png" class="delete" alt="">
          
 `

     listItemContainer.appendChild(div)
     document.getElementById('task-input').value = ''
    

    }
    else{
        alert('please add your task')
    }
    })
  

// const deleteTask = document.querySelector('.delete')
// deleteTask.addEventListener('click', () => {
//   console.log('delete')
// })

const completedTask = (button) => {
 const buttonParent = button.closest('div')
 const circle = buttonParent.querySelector('.circle')
 console.log(circle)
 circle.innerHTML = ` <img src="./Tick Symbol - Tick S.png" alt="" class ="tik-mark">`
 buttonParent.style.textDecoration = 'line-through';
  circle.className = '';
 
}

  const listItemContainer = document.querySelector('.list-item-container')
listItemContainer.addEventListener('click', (e) => {
  //  delete
if(e.target.classList.contains('delete')){
   e.target.parentNode.remove();
}
  // edit
if(e.target.classList.contains('edit')){
 const taskTextParent = e.target.closest('.list-items')
 const taskText = taskTextParent.querySelector('.taskBtn p')
 const newTaskText = prompt('Edit Your task :', taskText.innerText)
 if (newTaskText !== null && newTaskText !== '') {
      taskText.innerText = newTaskText;
  
  }

}



})


