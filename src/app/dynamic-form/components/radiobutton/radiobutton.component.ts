import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { MaterialModule } from "../../../material/material.module";
@Component({
  selector: "app-radiobutton",
  standalone: true,
  imports: [MaterialModule],
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<label class="radio-label-padding">{{field.label}}:</label>
<mat-radio-group [formControlName]="field.name">
<mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
</mat-radio-group>
</div>
`,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
  @Input() field!: FieldConfig;
  @Input() group!: FormGroup;
  constructor() {}
  ngOnInit() {}
}
