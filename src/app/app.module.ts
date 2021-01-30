import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { ProductsComponent } from "./products/products.component";
import { BuyersComponent } from "./buyers/buyers.component";
import { SellersComponent } from "./sellers/sellers.component";
import { AppRouting } from "./app-routing";
import { LoginService } from "./login/login.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductsGuard } from "./products/products.guard";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { RegisterUserService } from './register-user/register-user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    LoginComponent,
    ProductsComponent,
    BuyersComponent,
    SellersComponent,
    RegisterUserComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoginService, ProductsGuard, RegisterUserService]
})
export class AppModule {}
