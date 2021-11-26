import { Queue } from './queue';

describe('Queues', () => {
  it('should be able to enqueue a value in an empty queue', () => {
    const queue = new Queue();

    queue.enqueue(1);

    expect(queue).toMatchObject({
      first: {
        value: 1,
        next: null,
      },
      last: {
        value: 1,
        next: null,
      },
      length: 1,
    });
  });

  it('should be able to enqueue a value in a queue', () => {
    const queue = new Queue();

    const last = {
      value: 2,
      next: null,
    };

    queue.first = {
      value: 1,
      next: last,
    };
    queue.last = last;
    queue.length = 2;

    queue.enqueue(3);

    expect(queue).toMatchObject({
      first: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: null,
          },
        },
      },
      last: {
        value: 3,
        next: null,
      },
      length: 3,
    });
  });

  it('should be able to dequeue a value from a queue', () => {
    const queue = new Queue();

    const last = {
      value: 2,
      next: null,
    };

    queue.first = {
      value: 1,
      next: last,
    };
    queue.last = last;
    queue.length = 2;

    queue.dequeue();

    expect(queue).toMatchObject({
      first: {
        value: 2,
        next: null
      },
      last: {
        value: 2,
        next: null,
      },
      length: 1,
    });
  });

  it('should be able to peek queue', () => {
    const queue = new Queue();

    const last = {
      value: 2,
      next: null,
    };

    queue.first = {
      value: 1,
      next: last,
    };
    queue.last = last;
    queue.length = 2;

    const peek = queue.peek()

    expect(peek).toEqual(1)
  })

  it('should be able to peek an empty queue and return null', () => {
    const queue = new Queue();


    queue.first = null
    queue.last = null;
    queue.length = 0;

    const peek = queue.peek()

    expect(peek).toEqual(null)
  })
});
