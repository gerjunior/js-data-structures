import { Node } from './node'

export class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);

    this.tail.next = node;
    this.tail = node;

    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    this.length++;
  }

  print() {
    let node = this.head;

    const array = [];

    while (node !== null) {
      array.push(node.value);

      node = node.next;
    }

    return array;
  }

  insert(value, index) {
    this.length++;

    if (index <= 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const parentNode = this._traverseList(index - 1);
    newNode.next = parentNode.next;
    parentNode.next = newNode;
    return;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const parent = this._traverseList(index - 1);
    const newNextNode = parent.next.next;
    parent.next = newNextNode;
    this.length--;
    return;
  }

  reverse() {
    if (this.length <= 1) {
      return this.head;
    } 

    this.tail = this.head;

    let previous = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;

    return this.head;
  }
  
  _traverseList(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    if (currentIndex > this.length) {
      throw new Error('Index out of range.');
    }

    while (currentIndex <= index) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentIndex++;
      currentNode = currentNode.next;
    }
  }
}
