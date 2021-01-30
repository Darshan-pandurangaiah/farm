import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const headers = new HttpHeaders({
  "Content-Type": "application/json; charset=utf-8",
  host: "https://farmtesting.stackblitz.io"
});
@Injectable()
export class RegisterUserService {
  errormessage: string;
  constructor(private httpclient: HttpClient) {}
  InsertUser() {
    return this.httpclient
      .post<any>(
        "https://farmapi.azurewebsites.net/Register",
        {},
        { headers: headers }
      )
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          this.errormessage = error.message;
          console.error("There was an error!", error.message);
        }
      });
  }
}
