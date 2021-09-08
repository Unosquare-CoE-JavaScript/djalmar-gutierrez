import { When, Then } from 'cucumber';
import assert from 'assert';

When('Max deletes the task {string}', function (string) {
  this.taskManager.deleteTask(string);
});
Then('The task {string} should not be in the task list', function (string) {
  const task = this.taskManager.taskList.find(
    ({ description }) => description === string
  );
  assert.equal(this.taskManager.taskList, []);
  assert.equal(this.taskManager.taskList.includes(task), false);
});
