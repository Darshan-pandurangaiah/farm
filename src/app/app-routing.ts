import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsGuard } from "./products/products.guard";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [ProductsGuard]
  }
  // ,
  // { path:"Products",loadChildren:() => import(./products/product.module).then(m => m.productmodule);}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
