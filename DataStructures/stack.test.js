import { StackWithLinkedList, StackWithArray } from './stack';

describe('Stacks', () => {
  it.each([
    {
      stackType: 'stack with linked list',
      stack: new StackWithLinkedList(),
      expected: {
        top: {
          value: 1,
          next: null,
        },
        bottom: {
          value: 1,
          next: null,
        },
        length: 1
      },
    },
    {
      stackType: 'stack with array',
      stack: new StackWithArray(),
      expected: {
        stack: [1]
      }
    },
  ])('should be able to push an item to an empty $stackType', ({ stack, expected }) => {
    stack.push(1);

    expect(stack).toMatchObject(expected)
  });

  it.each([
    {
      stackType: 'stack with linked list',
      stack: (() => {
        const stack = new StackWithLinkedList()

        stack.top = {
          value: 1,
          next: null,
        };
    
        stack.bottom = {
          value: 1,
          next: null,
        };
    
        stack.length = 1

        return stack;
      })(),
      expected: {
        top: {
          value: 2,
          next: {
            value: 1,
            next: null,
          },
        },
        bottom: {
          value: 1,
          next: null,
        },
        length: 2
      }
    },
    {
      stackType: 'stack with array',
      stack: (() => {
        const stack = new StackWithArray()

        stack.stack = [1]

        return stack;
      })(),
      expected: {
        stack: [1, 2]
      }
    },
  ])('should be able to push an item to the top of a $stackType', ({ stack, expected }) => {
    stack.push(2);

    expect(stack).toMatchObject(expected)
  });

  it.each([
    {
      stackType: 'stack with linked list',
      stack: (() => {
        const stack = new StackWithLinkedList();

        stack.top = {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: null,
            },
          },
        };
    
        stack.bottom = {
          value: 1,
          next: null,
        };
    
        stack.length = 3

        return stack;
      })(),
      expected: {
        top: {
          value: 2,
          next: {
            value: 1,
            next: null,
          },
        },
        bottom: {
          value: 1,
          next: null,
        },
        length: 2,
      }
    },
    {
      stackType: 'stack with array',
      stack: (() => {
        const stack = new StackWithArray()

        stack.stack = [1,2,3]

        return stack;
      })(),
      expected: {
        stack: [1,2]
      }
    },
  ])('should be able to pop from the $stackType', ({ stack, expected }) => {
    const popped = stack.pop();

    expect(popped).toEqual(3)
    expect(stack).toMatchObject(expected)
  });

  it.each([
    {
      stackType: 'stack with linked list',
      stack: (() => {
        const stack = new StackWithLinkedList()

        stack.top = {
          value: 3,
          next: null
        };
    
        stack.bottom = {
          value: 3,
          next: null,
        };
    
        stack.length = 1

        return stack;
      })(),
      expected: {
        top: null,
        bottom: null,
        length: 0,
      }
    },
    {
      stackType: 'stack with array',
      stack: (() => {
        const stack = new StackWithArray()

        stack.stack = [3]

        return stack;
      })(),
      expected: {
        stack: []
      }
    },
  ])('should be able to pop the last item from the $stackType', ({ stack, expected }) => {
    const popped = stack.pop();

    expect(popped).toEqual(3)
    expect(stack).toMatchObject(expected)
  });

  it.each([
    {
      stackType: 'stack with linked list',
      stack: new StackWithLinkedList(),
      expected: {
        top: null,
        bottom: null,
        length: 0
      }
    },
    {
      stackType: 'stack with array',
      stack: new StackWithArray(),
      expected: {
        stack: []
      }
    },
  ])('should do nothing when popping an empty $stackType', ({ stack, expected }) => {
    const popped = stack.pop();

    expect(popped).toEqual(null)

    expect(stack).toMatchObject(expected)
  });

  it.each([
    {
      stackType: 'stack with linked list',
      stack: (() => {
        const stack = new StackWithLinkedList()

        stack.top = {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: null,
            },
          },
        };
    
        stack.bottom = {
          value: 1,
          next: null,
        };
    
        stack.length = 3;

        return stack;
      })(),
    },
    {
      stackType: 'stack with array',
      stack: (() => {
        const stack = new StackWithArray()

        stack.stack = [1,2,3]

        return stack
      })()
    },
  ])('should be able to peek the $stackType', ({ stack }) => {
    const peek = stack.peek();

    expect(peek).toEqual(3);
  });
});
