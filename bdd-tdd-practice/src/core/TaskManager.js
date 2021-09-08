import AbstractTaskManager from './AbstractTaskManager';
import Task from './Task';

export default class TaskManager extends AbstractTaskManager {
  constructor() {
    super();
    this.taskList = [];
  }

  addTask(description) {
    if (!description) {
      throw new Error('Please provide a task description');
    }
    let newTask = new Task(description);
    this.taskList.push(newTask);
  }

  toggleTask(taskId) {
    const task = this.taskList.find(({ id }) => id === taskId);
    task.toggled = !task.toggled;
  }

  deleteTask(taskDescription) {
    this.taskList = this.taskList.filter(
      ({ description }) => description !== taskDescription
    );
  }
}
