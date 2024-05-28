import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  field!: FieldConfig;
  group!: FormGroup;
}
