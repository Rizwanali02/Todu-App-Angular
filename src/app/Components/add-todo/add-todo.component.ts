import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.title && this.desc) {
      const todo = {
        id: Math.floor(Math.random() * 20),
        title: this.title,
        desc: this.desc,
        status: 'do',
      };
      this.todoAdd.emit(todo);
      this.title = '';
      this.desc = '';
    }
  }
}
