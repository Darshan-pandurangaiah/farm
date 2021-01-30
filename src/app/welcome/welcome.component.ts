import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})

export class WelcomeComponent implements OnInit {
  constructor() {
    document.getElementById("login").style.display = "";
    document.getElementById("Register").style.display = "";
  }

  ngOnInit() {}
}
