import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = "/auth";

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any>{
    return this.http.post<any>(this.URL + "/login", {"username": username, "password": password}, {observe: 'response'}).pipe(map( (response: any) => {
      localStorage.setItem("id", response.body.id);
      localStorage.setItem("username", response.body.username);
      localStorage.setItem("jwt", response.headers.get("authorization"));
      return this.getUserLoggedIn(); 
     }));
  }

  public logout(){
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("jwt");
  }

  public isUserLoggedIn() : boolean{
    const username = localStorage.getItem("username");
    return username !== null;
  }

  public getUserLoggedIn(): User {
    if(this.isUserLoggedIn()){
      const userLoggedIn = new User();
      userLoggedIn.id = Number(localStorage.getItem("id"));
      userLoggedIn.username = localStorage.getItem("username");
      return userLoggedIn;
    } else {
      return null;
    }

  }

  public JwtToken(): string {
    return localStorage.getItem("jwt");
  }
  
}
