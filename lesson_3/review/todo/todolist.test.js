/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray returns list items in an array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first returns first item in list', () => {
    expect(list.first()).toBe(todo1);
  });

  test('last returns last item in list', () => {
    expect(list.last()).toBe(todo3);
  });

  test('shift removes and returns first item in list', () => {
    let firstItem = list.shift();
    expect(firstItem).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop removes and returns last item in list', () => {
    let lastItem = list.pop();
    expect(lastItem).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns true when all items are done, false otherwise', () => {
    expect(list.isDone()).toBe(false);

    todo1.markDone();
    todo2.markDone();
    todo3.markDone();

    expect(list.isDone()).toBe(true);
  });

  test('add throws TypeError when adding an item that is not a Todo', () => {
    expect(() => list.add(1)).toThrow(TypeError);
  });

  test('itemAt returns item at index, ReferenceError if out of range', () => {
    expect(list.itemAt(1)).toBe(todo2);
    expect(() => list.itemAt()).toThrow(ReferenceError);
  });

  test('markDoneAt marks item at index as done, ReferenceError if no element', () => {
    list.markDoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(true);
    expect(() => list.markDoneAt(12)).toThrow(ReferenceError);
  });

  test('markUndoneAt unmarks item at specific index, raises RefError if no element', () => {
    expect(() => list.markUndoneAt(100)).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(list.itemAt(1).isDone()).toBe(true);

    list.markUndoneAt(1);
    expect(list.itemAt(1).isDone()).toBe(false);
  });

  test('markAllDone marks all items as done', () => {
    list.markAllDone();

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes item at given index, RefErr if no element', () => {
    expect(() => list.removeAt(10)).toThrow(ReferenceError);

    let todo = list.removeAt(1);

    expect(todo).toEqual([todo2]);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list with completed item', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    list.markDoneAt(1);
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list with all items complete', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over elements in list', () => {
    let newList = [];

    list.forEach(todo => newList.push(todo));

    expect(list.toArray()).toEqual(newList);
  });

  test('filter filters and returns new TodoList', () => {
    let newList = new TodoList(list.title);

    newList.add(todo1);

    expect(list.filter(todo => todo === todo1)).toEqual(newList);
  });
});