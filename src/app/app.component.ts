import { Component, ViewChild, AfterViewInit, AfterViewChecked, OnInit } from '@angular/core';
import { Task } from './model/task';
import { AddTaskComponent } from './components/add/add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(){

  }
   constructor(){}
}
