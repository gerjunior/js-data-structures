import { Node } from '../common/node';

export class StackWithLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top?.value;
  }

  push(value) {
    const node = new Node(value);
    if (!this.bottom) {
      this.bottom = node;
    }

    const previous = this.top;

    node.next = previous;
    this.top = node;

    this.length++;
  }

  pop() {
    if (!this.top) return null;

    const popped = this.top.value;
    this.top = this.top.next;

    if (!this.top) {
      this.bottom = null;
    }

    this.length--;

    return popped;
  }
}

export class StackWithArray {
  constructor() {
    this.stack = []
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value)
  }

  pop() {
    if (!this.stack.length) return null;

    return this.stack.pop();
  }
}