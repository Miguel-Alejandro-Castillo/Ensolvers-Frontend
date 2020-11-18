import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = "/auth";

  public userLoggedIn: User;

  public isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any>{
    return this.http.post<any>(this.URL + "/login", {"username": username, "password": password}, {observe: 'response'}).pipe(map( (response: any) => {
      console.log(response);
      localStorage.setItem("username", response.body.username);
      localStorage.setItem("jwt", response.headers.get("authorization"));
      this.userLoggedIn = new User();
      this.userLoggedIn.id = response.body.id;
      this.userLoggedIn.username = response.body.username;
      this.isUserLoggedIn$.next(true);
      return this.userLoggedIn; 
     }));
  }

  public logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("jwt");
    this.userLoggedIn = null;
    this.isUserLoggedIn$.next(false);
  }

  public isUserLoggedIn() : boolean{
    const username = localStorage.getItem("username");
    return username !== null;
  }

  public JwtToken(): string {
    return localStorage.getItem("jwt");
  }
  
}
