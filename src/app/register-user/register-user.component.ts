import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder,Validators, FormControl } from "@angular/forms";
import { RegisterUserService } from "./register-user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup;
  errormessage: string;
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    host: "https://farmtesting.stackblitz.io"
  });
  createForm() {
    // this.form = this.formBuilder.group({
    //   name: "" ,
    //   password: "",
    //   Roleid: ""
    // });
    this.form = new FormGroup({
      "name": new FormControl("",Validators.required),
      "password": new FormControl("",Validators.required),
      "Roleid": new FormControl("",Validators.required), 
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private httpclient: HttpClient
  ) {
    this.createForm();
    document.getElementById("login").style.display = "";
    document.getElementById("Register").style.display = "none";
  }

  ngOnInit() {}
  public onSubmit(): void {
    console.log(JSON.stringify(this.form.value));
    //InsertUser(this.form);
    this.httpclient
      .post<any>(
        "https://farmapi.azurewebsites.net/Register",
        JSON.stringify(this.form.value),
        {
          headers: this.headers
        }
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
