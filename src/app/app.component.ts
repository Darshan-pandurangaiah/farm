import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  logintitle = "Login";
  Registertitle = "Register";
  constructor(private route: Router) {}

  login() {
    this.route.navigate(["/login"]);
  }
  Register() {
    this.route.navigate(["/Register"]);
  }
}
