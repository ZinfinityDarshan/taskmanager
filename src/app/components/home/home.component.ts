import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Task } from 'src/app/model/task';
import { AddTaskComponent } from '../add/add-task/add-task.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewChecked {

  tasksParent: Task[] = [];

  message: string;
  @ViewChild(AddTaskComponent, {read: false, static: false}) addtaskcomponent;
  
  addTasks(value: Task[]){
    console.log('some taret event',value);
    
    this.tasksParent = value;
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewInit()')
    this.message = this.addtaskcomponent.message;
  }
}
