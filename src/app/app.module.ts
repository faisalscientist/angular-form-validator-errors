import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxFormControlErrorsModule } from "projects/ngx-form-control-errors/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxFormControlErrorsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
