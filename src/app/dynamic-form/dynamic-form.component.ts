// import { Component } from '@angular/core';
// import { MaterialModule } from '../material/material.module';

// @Component({
//   selector: 'app-dynamic-form',
//   standalone: true,
//   imports: [MaterialModule],
//   templateUrl: './dynamic-form.component.html',
//   styleUrl: './dynamic-form.component.scss'
// })
// export class DynamicFormComponent {

// }


import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { FieldConfig, JsonFieldConfig } from "./field.interface";
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { ButtonComponent } from "./components/button/button.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { ChildFormComponent } from "./components/child-form/child-form.component";
import { DateComponent } from "./components/date/date.component";
import { InputComponent } from "./components/input/input.component";
import { RadiobuttonComponent } from "./components/radiobutton/radiobutton.component";
import { SelectComponent } from "./components/select/select.component";

@Component({
  // exportAs: "dynamicForm",
  // selector: "dynamic-form",
  selector: 'app-dynamic-form',
  standalone: true,
  templateUrl: './dynamic-form.component.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // DynamicFieldDirective,
    MaterialModule,
  
     InputComponent,
     ButtonComponent,
     SelectComponent,
     DateComponent,
     RadiobuttonComponent,
     CheckboxComponent,
     ChildFormComponent
  ],
  // template: `
  //   <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
  //   	<ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form"></ng-container>
  //   </form>`,
  styles: []
})
export class DynamicFormComponent {
  @Input() fields: FieldConfig[] = [];
  form!: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() childFG: EventEmitter<any> = new EventEmitter<any>();
  //form: FormGroup;

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl(this.fields);
    this.form.valueChanges.subscribe(x => {
      this.submit.emit(x);
      // this.childFG.emit(this.form);
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl(fields: any[]) {
    console.log("fields", fields)
    const group = this.fb.group({});
    fields.forEach((field: { type: string; formArrays: any[]; name: string; value: any; validations: any; }) => {
      if (field.type === "button") return;
      if (field.type === "childform") {
        let items: any[] = [];
        field.formArrays.forEach((fields: any) => {
          items.push(this.createControl(fields));
        });
        let controlArray = this.fb.array(items);
        group.addControl(field.name, controlArray);
      } else {
        const control = this.fb.control(
          field.value,
          this.bindValidations(field.validations || [])
        );
        group.addControl(field.name, control);
      }
    });
    console.log(group);
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList: any[] = [];
      validations.forEach((valid: { validator: any; }) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
