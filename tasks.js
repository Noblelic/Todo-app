'use strict';

const taskForm = document.querySelector('.task-form');
const taskTitle = document.querySelector('#task-title');
const taskDescription = document.querySelector('#task-description');        
const cointainer = document.querySelector('.tasks-list');

// Main function to display all tasks and wire up actions
function renderTasks() {
  const Todolist = JSON.parse(localStorage.getItem('Todolists')) ?? [];
  cointainer.innerHTML = ''; // Clear previous HTML to avoid duplication

  Todolist.forEach(function(task, index){
    const statusClasses = { 'pending': 'pending-status', 'completed': 'completed-status', 'in-progress': 'in-progress-status', 'overdue': 'overdue-status' };
    let status = statusClasses[task.status] || 'pending-status';

    const Html = `
      <div class="task-card ${status}">
        <div class="task-check">
          <input type="checkbox" ${task.status === 'completed' ? 'checked' : ''}>
        </div>
        <div class="task-info">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <div class="task-meta">
            <span class="priority ${task.priority}">${task.priority}</span>
            <span>${task.category}</span>
            <span>Due: ${task.dueDate}</span>
          </div>
        </div>
        <div class="task-status">
          <select data-index="${index}">
            <option value="pending" ${task.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="in-progress" ${task.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
            <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Completed</option>
          </select>
        </div>
        <div class="task-actions">
          <button class="edit-btn" data-index="${index}">Edit</button>
          <button class="delete-btn" data-index="${index}">Delete</button>
        </div>
      </div>
    `;
    cointainer.insertAdjacentHTML('beforeend', Html);
  });

  // Wire up Delete buttons (Must happen inside the function after rendering HTML)
  document.querySelectorAll('.delete-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      let taskIndex = e.target.dataset.index;
      
      let currentList = JSON.parse(localStorage.getItem('Todolists')) ?? [];
      currentList.splice(taskIndex, 1); // Remove item from array
      localStorage.setItem('Todolists', JSON.stringify(currentList)); // Save back to storage
      
      renderTasks(); // Re-render the UI
    });
  });

  // Wire up Status Dropdown updates
  document.querySelectorAll('.task-status select').forEach(function(dropdown) {
    dropdown.addEventListener('change', function(e) {
      let taskIndex = e.target.dataset.index;
      let newStatus = e.target.value;

      let currentList = JSON.parse(localStorage.getItem('Todolists')) ?? [];
      currentList[taskIndex].status = newStatus; // Update status value
      localStorage.setItem('Todolists', JSON.stringify(currentList));

      renderTasks(); // Re-render to update the card's CSS class
    });
  });
}

// Initial draw when the dashboard loads
renderTasks();







Deletebtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let taskIndex = e.target.dataset.index;

    });
});