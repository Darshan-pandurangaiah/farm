import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
logintitle = "login";
  constructor(private route: Router) {    
  }

  login() {
    this.route.navigate(["/login"]);
  }
}
