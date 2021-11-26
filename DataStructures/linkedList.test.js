import { LinkedList } from './linkedList';

describe('Linked Lists', () => {
  it('should be able to start a LinkedList with a value', () => {
    const value = 1;

    const linkedList = new LinkedList(value);
    expect(linkedList.head).toMatchObject({
      value,
      next: null,
    });

    expect(linkedList.tail).toMatchObject({
      value,
      next: null,
    });
  });

  it('should be able to append a value to the linkedList', () => {
    const value = 1;

    const linkedList = new LinkedList('Initial');
    linkedList.append(value);

    expect(linkedList.head).toMatchObject({
      value: 'Initial',
      next: {
        value,
        next: null,
      },
    });
  });

  it('should be able to prepend a value to the linkedList', () => {
    const value = 1;
    const linkedList = new LinkedList('Initial');
    linkedList.prepend(value);

    expect(linkedList.head).toMatchObject({
      value,
      next: {
        value: 'Initial',
        next: null,
      },
    });
  });

  it('should be able to insert a value to first position of the linkedList', () => {
    const value = 1;
    const linkedList = new LinkedList('Initial');
    linkedList.insert(value, 0);

    expect(linkedList.head).toMatchObject({
      value,
      next: {
        value: 'Initial',
        next: null,
      },
    });
  });

  it('should be able to insert a value to last position of the linkedList', () => {
    const value = 1;
    const linkedList = new LinkedList('Initial');
    linkedList.insert(value, 1);

    expect(linkedList.head).toMatchObject({
      value: 'Initial',
      next: {
        value,
        next: null,
      },
    });
  });

  it('should be able to insert a value to Nth position of the linkedList', () => {
    const value = 1;
    const linkedList = new LinkedList('first');
    linkedList.append('third');
    linkedList.append('fourth');

    linkedList.insert(value, 1);

    expect(linkedList.head).toMatchObject({
      value: 'first',
      next: {
        value,
        next: {
          value: 'third',
          next: {
            value: 'fourth',
            next: null,
          },
        },
      },
    });
  });
});