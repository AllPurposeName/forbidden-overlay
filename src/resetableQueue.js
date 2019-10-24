export default class ResetableQueue {
  constructor(elements) {
    this.items = elements || [];
    this.originalItems = Object.assign([], this.items);
    this.resetAtCount = 0;
  }

  reset() {
    this.items = Object.assign([], this.originalItems);
  }

  queue(el) {
    this.items.push(el);
  }

  dequeue() {
    if (this.needsReseting()) {
      this.reset();
    }
    return this.items.shift();
  }

  needsReseting() {
    return this.items.length <= this.resetAtCount;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    return this.isEmpty() ? 'Queue is empty' : this.items[0];
  }
}
