import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {

  @Input() tasksChild: Task[]

  constructor() { }

  ngOnInit() {
  }

}
