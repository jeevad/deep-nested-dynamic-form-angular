import {
  Component,
  Input,
} from "@angular/core";
import {
  FormGroup,
  FormBuilder} from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { FieldConfig } from "./field.interface";
import { ButtonComponent } from "./components/button/button.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { ChildFormComponent } from "./components/child-form/child-form.component";
import { DateComponent } from "./components/date/date.component";
import { InputComponent } from "./components/input/input.component";
import { RadiobuttonComponent } from "./components/radiobutton/radiobutton.component";
import { SelectComponent } from "./components/select/select.component";
import { TableComponent } from "./components/table/table.component";

@Component({
  // exportAs: "dynamicForm",
  // selector: "dynamic-form",
  selector: 'app-dynamic-form',
  standalone: true,
  templateUrl: './dynamic-form.component.html',
  imports: [
    // DynamicFieldDirective,
    MaterialModule,

    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    ChildFormComponent,
    TableComponent
  ],
  // styles: []
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {

  @Input() field!: FieldConfig;
  @Input() group!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

}
