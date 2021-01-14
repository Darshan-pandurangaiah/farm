import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { ProductsComponent } from "./products/products.component";
import { BuyersComponent } from "./buyers/buyers.component";
import { SellersComponent } from "./sellers/sellers.component";
import { AppRouting } from "./app-routing";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRouting],
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    LoginComponent,
    ProductsComponent,
    BuyersComponent,
    SellersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
