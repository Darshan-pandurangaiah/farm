import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, pipe, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Login } from "./login";
import { Router } from "@angular/router";

const headers = new HttpHeaders({
  "Content-Type": "application/json; charset=utf-8",
  host: "https://farmtesting.stackblitz.io"
});

@Injectable()
export class LoginService {
  public logininstance: Login;
  public errormessage: string;
  public url: string;
  data = "";

  constructor(private http: HttpClient, private route: Router) {
    //this.logininstance = new Login();
  }
  setData(logininstance1) {
    this.logininstance = logininstance1;
  }

  getData() {
    return this.logininstance;
  }
  getusers() {
    console.log(JSON.stringify(this.logininstance));
    return this.http
      .post<boolean>(
        "https://farmapi.azurewebsites.net/Users",
        JSON.stringify(this.logininstance),
        { headers: headers }
      )
      .subscribe({
        next: data => {
          console.log(data);
          if (data == true) {
            sessionStorage.setItem("Isloggedin", "true");
          } else {
            sessionStorage.setItem("Isloggedin", "false");
          }
          console.log(data);
          this.route.navigate(["/products"]);
        },
        error: error => {
          this.errormessage = error.message;
          console.error("There was an error!", error.message);
        }
      });
  }
}
