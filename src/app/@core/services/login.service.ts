import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
    urlLogin = "sample url";
    status:any; 
    user:any;
    role:any;
    constructor(private http: HttpClient) { }

    public login(email:string,pass:string):Observable<any>{
    	return this.http.post(this.urlLogin,{
        class:"login",
        function:'validate',
        parameters:{email, pass}});
    }
    
    public setRole(role:string):void{
      localStorage.setItem('role', role);
    }
    public setUser(user: string):void{
      localStorage.setItem('user', user);
    }
    public  setToken(token: string): void {
      localStorage.setItem('isLoggedIn', token);
      // console.log(this.isLogged());
    }
    public isLogged() {
      return localStorage.getItem('isLoggedIn') != null;
    }
    
    
}