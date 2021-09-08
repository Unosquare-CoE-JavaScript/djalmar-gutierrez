import TaskManager from './TaskManager';
import Task from './Task';
describe('Task manager', () => {
  let taskManager;
  beforeEach(() => {
    taskManager = new TaskManager();
  });
  it('should have an empty array upon instantiation', () => {
    expect(taskManager.taskList).toEqual([]);
  });

  it('should add a task with the given description', () => {
    const taskDescription = '1st task';
    taskManager.addTask(taskDescription);
    expect(taskManager.taskList[0]).toBeInstanceOf(Task);
    expect(taskManager.taskList[0].description).toBe(taskDescription);
  });

  it('should throw an error', () => {
    expect(() => {
      taskManager.addTask('');
    }).toThrowError('Please provide a task description');
  });

  it('should not store an empty task', () => {
    try {
      taskManager.addTask('');
    } catch (e) {}
    expect(taskManager.taskList).not.toContainEqual(
      expect.objectContaining({ description: '' })
    );
  });

  describe('Toggle task', () => {
    it('should toggle the task for the given id', () => {
      const mockTask = new Task('buy apples');

      taskManager.taskList = [mockTask];
      taskManager.toggleTask(mockTask.id);

      expect(mockTask.toggled).toBe(true);
    });
  });

  describe('Delete task', () => {
    it('should delete a task by description', () => {
      const mockDescription = 'buy banana';
      taskManager.addTask(mockDescription);
      taskManager.deleteTask(mockDescription);
      expect(taskManager.taskList).toEqual([]);
    });
  });
});
