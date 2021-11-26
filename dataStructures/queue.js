import { Node } from '../common/node'

export class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (!this.first) return null;

    return this.first.value
  }

  enqueue(value){
    const node = new Node(value)

    if (this.first) {
      this.last.next = node;
      this.last = node;
    }

    if (!this.first) {
      this.first = node;
      this.last = node;
    }

    this.length++;
  }

  dequeue(){
    if (!this.first) return null;

    const popped = this.first.value;

    this.first = this.first.next;

    if (!this.first) {
      this.last = null;
    }

    this.length--;

    return popped;
  }
}
