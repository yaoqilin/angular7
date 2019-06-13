import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoComponent } from './todo/todo.component';


@Component({
  selector: 'app-right-control',
  templateUrl: './right-control.component.html',
  styleUrls: ['./right-control.component.css']
})
export class RightControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  add(title: string) {
    this.todoList.add(title);
  }
}
