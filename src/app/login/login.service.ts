import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Login } from "./login";

@Injectable()
export class LoginService {
  public logininstance: Login;
  constructor(private http: HttpClient) {
    this.logininstance = new Login();
  }
  getusers(logininstance) {
    console.log(" test " + logininstance.username);
    return this.http
      .post("https://farmapi.azurewebsites.net/Users", {
        username: logininstance.username,
        password: logininstance.password
      })
      .pipe(catchError(this.handlerror));
  }
  handlerror(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err.error() || "server erroring");
  }
}
