import { Given, When, Then } from 'cucumber';
import assert from 'assert';

Given('Max has a task list', function () {
  assert.deepStrictEqual(this.taskManager.taskList, []);
});

When('Max adds the task {string}', function (string) {
  if (string == null) {
    string = '';
  }
  try {
    this.taskManager.addTask(string);
  } catch (e) {
    this.recievedError = e;
  }
});

Then('{string} should be in the task list', function (string) {
  assert.deepStrictEqual(this.taskManager.taskList[0].description, string);
});

Then('he should be notified to give a description', function () {
  assert.equal(this.recievedError.message, 'Please provide a task description');
});
