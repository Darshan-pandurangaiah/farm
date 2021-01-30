import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup;
  createForm() {
    this.form = this.formBuilder.group({
      Name1: "",
      Password1: ""
    });
  }
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log("submitted");
  }
  public onSubmit(): void {
    console.log("submitted");
  }
}
