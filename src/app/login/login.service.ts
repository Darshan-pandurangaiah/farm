import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, pipe, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Login } from "./login";

const headers = new HttpHeaders({
  "Content-Type": "application/json; charset=utf-8",
  host: "https://farmtesting.stackblitz.io"
});

@Injectable()
export class LoginService {
  public logininstance: Login;
  public url: string;
  data = "";

  constructor(private http: HttpClient) {
    this.logininstance = new Login();
  }
  getusers(logininstance) {
    console.log(" test ");
    return this.http
      .post<boolean>(
        "https://farmapi.azurewebsites.net/Users",
        {
          Name: "Darshan",
          Password: "comm@5"
        },
        { headers: headers }
      )
      .subscribe(res => {
        console.log("inside postmehtod of sub.function", true);
      });
  }
  handlerror(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.message || "server erroring");
  }
}
