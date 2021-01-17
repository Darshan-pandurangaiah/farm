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
  }

  ngOnInit() {}

  submitform() {
    console.log(this.login.password);
    this.loginser.getusers(this.login).subscribe(d => console.log(d));
  }
}
