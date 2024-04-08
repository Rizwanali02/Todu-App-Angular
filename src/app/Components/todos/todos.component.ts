import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  doingTodos: Todo[] = [];
  doneTodos: Todo[] = [];

  localItem;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }

    const localDoingTodos = localStorage.getItem('doing-todos');
    if (localDoingTodos) {
      this.doingTodos = JSON.parse(localDoingTodos);
    }

    const localDoneTodos = localStorage.getItem('done-todos');
    if (localDoneTodos) {
      this.doneTodos = JSON.parse(localDoneTodos);
    }
  }

  selectedTab: any = 'do';
  removeTodoFromAllLists(todo: Todo) {
    // Remove the todo from todos array
    const indexTodos = this.todos.indexOf(todo);
    if (indexTodos !== -1) {
      this.todos.splice(indexTodos, 1);
    }

    const indexDoingTodos = this.doingTodos.indexOf(todo);
    if (indexDoingTodos !== -1) {
      this.doingTodos.splice(indexDoingTodos, 1);
    }

    const indexDoneTodos = this.doneTodos.indexOf(todo);
    if (indexDoneTodos !== -1) {
      this.doneTodos.splice(indexDoneTodos, 1);
    }

    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('doing-todos', JSON.stringify(this.doingTodos));
    localStorage.setItem('done-todos', JSON.stringify(this.doneTodos));
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    this.removeTodoFromAllLists(todo);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.unshift(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }


  doingTodoClicked(todo: Todo) {
    console.log('Doing todos', todo);
    const index = this.todos.indexOf(todo);
    if (this.doingTodos.some((t) => t.id === todo.id)) {
      alert('Todo In Doing Already');
    } else {
      todo.status = 'doing';
      this.doingTodos.unshift(todo);
      localStorage.setItem('doing-todos', JSON.stringify(this.doingTodos));
    }
  }

  doneTodoClicked(todo: Todo) {
    console.log('Done todo clicked', todo);
    const index = this.doingTodos.indexOf(todo);
    if (index !== -1) {
      this.doingTodos.splice(index, 1);
      localStorage.setItem('doing-todos', JSON.stringify(this.doingTodos));
    }
    todo.status = 'done';
    this.doneTodos.unshift(todo);
    localStorage.setItem('done-todos', JSON.stringify(this.doneTodos));
  }

  ngOnInit(): void {}
}  
