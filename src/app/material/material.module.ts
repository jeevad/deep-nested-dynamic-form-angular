import { ModuleWithProviders, NgModule, Type } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import {
//   MatButtonModule,
//   MatIconModule,
//   MatCardModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatListModule,
//   MatDatepickerModule,
//   MatNativeDateModule,
//   MatSelectModule,
//   MatOptionModule,
//   MatCheckboxModule,
//   MatRadioModule
// } from "@angular/material";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialog } from '@angular/material/dialog';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from '../dynamic-form/components/dynamic-field/dynamic-field.directive';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

const materialModules: (any[] | Type<any> | ModuleWithProviders<{}>) = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  // MatNativeDateModule,
  // MatMomentDateModule,
  MatSelectModule,
  // MatOptionModule,
  MatCheckboxModule,
  MatRadioModule,

  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  DynamicFieldDirective,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  providers: [provideNativeDateAdapter()],
})
export class MaterialModule { }
