import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private db: AngularFirestore) { }

  addTask(value: Task){    
    this.db.collection('tasks').add(value).then(result =>{
      console.log(result);
    })
  }

  getTasks(){
    return this.db.collection<Task>('tasks').valueChanges();
  }
}
