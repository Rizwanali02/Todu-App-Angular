import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() selectedTab: any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() doingTodoClicked: EventEmitter<Todo> = new EventEmitter();
  @Output() doneTodoClicked: EventEmitter<Todo> = new EventEmitter();

  onclick(todo: Todo) {
    console.log('onclike clicked');
    this.todoDelete.emit(todo);
  }
  doingTodos(todo: Todo) {
    console.log('Doing todos clicked');
    this.doingTodoClicked.emit(todo);
  }
  doneTodos(todo: Todo) {
    console.log('done todo clicked', todo);
    this.doneTodoClicked.emit(todo);
  }

  ngOnInit(): void {}
}
