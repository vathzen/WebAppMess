import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Response,Code,User } from './classes';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { AuthGuard } from '../auth.guard';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  baseUrl:string = 'https://sastramess.herokuapp.com/';
  user = new User();

  constructor(private httpClient: HttpClient, private auth: AuthGuard) {}

  private handleError(err: HttpErrorResponse){
      console.error(err);
      return throwError('Something bad has happened.Try again later.');
  }

  public putMenu(menu: Object): Observable<Response>{
      var json = JSON.stringify(menu);
      return this.httpClient.post(this.baseUrl + 'menu',json).pipe(
          map(response => {
              console.log(response);
              return new Response(response);
          }),
          catchError(this.handleError)
      );
  }

    public getCodes(): Observable<any>{
        return this.httpClient.get(this.baseUrl + 'codes').pipe(
            map(response => {
                console.log(response)
                return response;
            }),
            catchError(this.handleError)
        );
    }

    public userAuth(username,pwd): Observable<Response>{
        this.user.username = username;
        this.user.password = pwd;
        console.log(this.user);
        return this.httpClient.post(this.baseUrl +'users?user=1',this.user).pipe(
            map(response => {
                console.log(response);
                this.auth.setLoggedIn(true);
                return new Response(response);
            }),
            catchError(this.handleError)
        );
    }

    public setLoggedInFalse(){ //Only until session validation
        this.auth.setLoggedIn(false);
    }

    public getLoggedIn(){
        return this.auth.loggedIn;
    }

public getStatus(): Observable<Response>{
    return this.httpClient.get(this.baseUrl).pipe(
        map(val => {
            return new Response(val);
        }),
        catchError(this.handleError)
    );
}

}
