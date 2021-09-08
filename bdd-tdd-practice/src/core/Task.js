import uuid from 'uuid';

export default class Task {
  constructor(description) {
    this.description = description;
    this.id = uuid();
    this.toggled = false;
  }
}
