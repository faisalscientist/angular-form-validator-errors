import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "form-error-messages",
  templateUrl: "./form-error-messages.component.html",
  styles: []
})
export class FormErrorMessagesComponent implements OnInit {
  @Input() control: FormControl;

  constructor() {}

  ngOnInit() {}
}
