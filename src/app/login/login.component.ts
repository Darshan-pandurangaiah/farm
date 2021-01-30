import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { Login } from "./login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  login = new Login();
  constructor(private routes: Router, private loginser: LoginService) {
    document.getElementById("login").style.display = "none";
    document.getElementById("Register").style.display = "";
  }

  ngOnInit() {}

  submitform() {
    console.log(this.login.Password);
    this.loginser.getusers(this.login);
  }
}
