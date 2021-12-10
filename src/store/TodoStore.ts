import { action, makeObservable, observable } from "mobx";

interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
}

class TodoStore {
  @observable todos: TodoItem[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  add(name: string) {
    const id = Math.random().toString();
    this.todos.push({ id, name, completed: false });
  }
}

export default new TodoStore();
