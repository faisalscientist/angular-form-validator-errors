import { NgModule } from "@angular/core";
import { NgxFormControlErrorsComponent } from "./ngx-form-control-errors.component";
import { FormErrorMessagesComponent } from "./form-error-messages/form-error-messages.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [NgxFormControlErrorsComponent, FormErrorMessagesComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [NgxFormControlErrorsComponent, FormErrorMessagesComponent]
})
export class NgxFormControlErrorsModule {}
