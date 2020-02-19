import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "ngx-form-errors",
  templateUrl: "./ngx-form-control-errors.component.html",
  styles: []
})
export class NgxFormControlErrorsComponent implements OnInit {
  @Input() formControlField: FormControl;
  constructor() {}

  ngOnInit() {
    console.log(this.formControlField);
  }
}
