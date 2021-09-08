import { setWorldConstructor } from 'cucumber';
import TaskManager from '../../src/core/TaskManager';

class World {
  constructor() {
    this.taskManager = new TaskManager();
  }
}

setWorldConstructor(World);
