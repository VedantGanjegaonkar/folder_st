import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'backend/src/models/user.model';
import { IUser } from 'backend/src/models/signup.model';
import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})

export class UserService { 
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/getAll`);
  }

  register(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(`${this.apiUrl}/auth/register`,user);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('token');
  }

  
  updateUser(userId: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`);
  }
}


// put(`${this.apiUrl}/users/${userId}`, user);
