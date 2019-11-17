import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/addtask.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, OnChanges, OnDestroy {

  message: string = "i am message";
  taskForm: FormGroup;
  tasks: Task[] = [];

  @Output() tasksout = new EventEmitter(); 

  constructor(private fb: FormBuilder, private addTaskService: TaskService,
    private snackbar: MatSnackBar) {

    this.taskForm = fb.group({
      "title":[null],
      "decp":[null],
      "completiontime": [null],
      "assignee":[null]
    })
   }

  ngOnInit() {

    this.getAllTasks();
    console.log('ngOnInit()  {} ***********');
    
  }

  ngOnChanges(some: SimpleChanges){

    console.log('ngOnChanges()  {} ###########', some.model.currentValue);

  }

  ngOnDestroy(){

    console.log('ngOnDestroy() {} ^^^^^^^^^^^^');
    
  }
  addTask(value: Task){

    console.log(value.assignee);
    this.addTaskService.addTask(value);
    this.snackbar.open('user is added succesfully', 'close', {duration: 1800});

  }

  doSomeChangesInData(){
    console.log('change data is called');
    
    this.tasks.splice(2,2);
  }
  clearForm(value: FormGroup){
    value.reset();
  }

  getAllTasks(){
    this.addTaskService.getTasks().subscribe((data) =>{      
      this.tasks = data;
      this.tasksout.emit(this.tasks);
    })
  }
}
