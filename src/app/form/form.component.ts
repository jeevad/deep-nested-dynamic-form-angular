import { Component, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../dynamic-form/field.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @ViewChild(DynamicFormComponent) form!: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    // {
    //   type: "childform",
    //   label: "Child Form",
    //   name: "childForm",
    //   inputType: "NA",
    //   formArrays: [
    //     [
    //       {
    //         type: "input",
    //         label: "firstname",
    //         name: "firstname",
    //         validations: [
    //           {
    //             name: "required",
    //             validator: Validators.required,
    //             message: "First Name Required"
    //           },
    //           {
    //             name: "pattern",
    //             validator: Validators.pattern("^[a-zA-Z]+$"),
    //             message: "Accept only text"
    //           }
    //         ]
    //       },
    //       {
    //         type: "input",
    //         label: "lastname",
    //         name: "lastname",
    //         validations: [
    //           {
    //             name: "required",
    //             validator: Validators.required,
    //             message: "Last Name Required"
    //           },
    //           {
    //             name: "pattern",
    //             validator: Validators.pattern("^[a-zA-Z]+$"),
    //             message: "Accept only text"
    //           }
    //         ]
    //       }
    //     ],
    //     [
    //       {
    //         type: "input",
    //         label: "firstname",
    //         name: "firstname",
    //         validations: [
    //           {
    //             name: "required",
    //             validator: Validators.required,
    //             message: "First Name Required"
    //           },
    //           {
    //             name: "pattern",
    //             validator: Validators.pattern("^[a-zA-Z]+$"),
    //             message: "Accept only text"
    //           }
    //         ]
    //       },
    //       {
    //         type: "input",
    //         label: "lastname",
    //         name: "lastname",
    //         validations: [
    //           {
    //             name: "required",
    //             validator: Validators.required,
    //             message: "Last Name Required"
    //           },
    //           {
    //             name: "pattern",
    //             validator: Validators.pattern("^[a-zA-Z]+$"),
    //             message: "Accept only text"
    //           }
    //         ]
    //       }
    //     ]
    //   ],
    //   validations: []
    // },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male",
      inputType: "NA",
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      inputType: "text",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"],
      inputType: "NA",
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true,
      inputType: "NA",
    },
    {
      type: "button",
      label: "Save",
      name: 'save',
      inputType: "NA",
    }
  ];

  submit(value: any) { }

}
