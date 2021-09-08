import { Given, Then, When } from 'cucumber';
import assert from 'assert';
import { timeStamp } from 'console';
Then('the task {string} should be set to undone', function (string) {
  const { toggled } = this.taskManager.taskList.find(
    (task) => task.description === string
  );

  assert.equal(toggled, false);
});

Given('Max has added a task {string}', function (string) {
  this.taskManager.addTask(string);
});

When('Max toggles the task {string}', function (string) {
  const { id } = this.taskManager.taskList.find(
    (task) => task.description === string
  );
  this.taskManager.toggleTask(id);
});

Then('the task {string} should be set to done', function (string) {
  const { toggled } = this.taskManager.taskList.find(
    (task) => task.description === string
  );
  assert.equal(toggled, true);
});
