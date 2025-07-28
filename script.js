const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task')

    addTaskBtn.addEventListener('click', () => {
      if(taskInput.value){
     const listItemContainer = document.querySelector('.list-item-container')
     const div = document.createElement('div')
     div.classList.add('list-items')
     div.innerHTML = `
    <div class="taskBtn"><button onclick="completedTask(this)" class="circle-btn"><div class="circle" ></div>
      </button> <p>${taskInput.value}</p></div> 
      <button class="delete">x</button
    
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
if(e.target.classList.contains('delete')){
   e.target.parentNode.remove();
}
})


//  completedTask = (button) =>{

//    const li = button.closest('li')
//    const circle = li.querySelector('.circle')
   
// //    const existingImg = circle.querySelector('.tick-mark')
// //    if(existingImg){
   
// //    }
//   circle.innerHTML = `<img  src="./Free Check Tick.png" alt="" class="tick-mark">`
//          li.innerText = 'completed'
   
//  }

