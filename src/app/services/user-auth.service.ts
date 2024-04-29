import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) { }
  private url='http://localhost:3000/users'
  signup(user:User):Observable<User>
  {
    return this.http.post<User>(this.url,user);
  }
}
