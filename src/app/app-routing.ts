import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
