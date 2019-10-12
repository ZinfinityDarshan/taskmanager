import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { AddtaskService } from 'src/app/services/addtask.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskForm: FormGroup;


  constructor(private fb: FormBuilder, private addTaskService: AddtaskService) {

    this.taskForm = fb.group({
      "title":[null],
      "decp":[null],
      "completiontime": [null],
      "assignee":[null]
    })
   }

  ngOnInit() {
  }

  addTask(value: Task){

    console.log(value.assignee);
    this.addTaskService.addTask(value);
  }

  clearForm(value: FormGroup){
    value.reset();
  }
}
