import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  constructor(private userservice: UserService) { }

  response: any;

  ngOnInit() {
    this.userservice.getAllUSers().subscribe(data =>{
      console.log(data);
      
      this.response = data;
    })
  }

}
