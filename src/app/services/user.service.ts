import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8080/";

  getAllUSers() : Observable<User[]>{
    return this.http.get<User[]>(this.baseurl+'user/all');
  }
}
