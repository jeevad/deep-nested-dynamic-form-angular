import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { MaterialModule } from "../../../material/material.module";
@Component({
  selector: "app-button",
  standalone: true,
  imports: [MaterialModule],
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<button type="submit" mat-raised-button color="primary">{{field.label}}</button>
</div>
`,
  styles: []
})
export class ButtonComponent implements OnInit {
  field!: FieldConfig;
  group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
