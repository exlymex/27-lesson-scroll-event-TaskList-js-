const addInput = document.getElementById('input-add'),
      addButton = document.getElementById('btn-add'),
      list = document.getElementById('main-ul'),
      checkBox = document.getElementsByClassName('checkbox'),
      mistake = document.getElementById('mistake'),
      mistakeEmpty = document.getElementById('mistake__empty');

let tasks = [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks')) 

function Task(description) {
  this.description = description;
  this.completed = false;
}

const createTemplate = (task,index) => {
  return `<li><input onclick ='deleteTask(${index})'class = 'checkbox' type = 'checkbox' ${task.completed ? 'checked' : ''}>${task.description}<li>`
}

const fillHTMLList = () => {
  list.innerHTML = ``
  if(tasks.length > 0){
    tasks.forEach((item,index) => {
      list.innerHTML += createTemplate(item,index)
    });
  }
}
fillHTMLList()


addButton.addEventListener('click',()=>{
  if (addInput.value.length < 1 ||
    !isNaN(addInput.value)){
      mistakeEmpty.style.display = 'block'
} else{
  tasks.push(new Task(addInput.value))
    updateLocal()
    fillHTMLList()
        addInput.value = ''
}
})



const deleteTask = index => {
  tasks[index].completed  = !tasks[index].completed
  if(tasks.length == 1 && tasks[index].completed){
   mistake.style.display = 'block'
   return
  }
  if(tasks[index].completed){
    tasks.splice(index,1)
    updateLocal()
    fillHTMLList()
  }
} 
const updateLocal = () => {
  localStorage.setItem('tasks',JSON.stringify(tasks))
}
const closeMistake = () => {
  mistake.style.display = 'none'
}
const closeMistakeEmpty = () => {
  mistakeEmpty.style.display = 'none'
}

