import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, pipe, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Login } from "./login";

@Injectable()
export class LoginService {
  public logininstance: Login;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Content-Length": "50"
    })
  };

  constructor(private http: HttpClient) {
    this.logininstance = new Login();
  }
  getusers(logininstance) {
    console.log(" test " + logininstance.username);
    return this.http
      .post<any>(
        "https://farmapi.azurewebsites.net/Users",
        {
          Name: "Darshan",
          Password: "comm@51"
        },
        this.httpOptions
      )
      .pipe(catchError(this.handlerror));
  }
  handlerror(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.message || "server erroring");
  }
}
