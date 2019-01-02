import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { DataExportService } from '../../../services/data-export.service';
import { FormControl, Validators } from '@angular/forms';
import { DataExportTemplate } from '../../../models/data-export-template';

@Component({
  selector: 'app-data-export-edit',
  templateUrl: './data-export-edit.component.html',
  styleUrls: ['./data-export-edit.component.css']
})
export class DataExportEditComponent {
  displayedColumns = ['sourcePath', 'wildcards', 'recursive'];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public template: DataExportTemplate,
    public dialogRef: MatDialogRef<DataExportEditComponent>,
    public dataExportService: DataExportService
  ) {}

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  newPath() {
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataExportService.update(this.template);
  }
}
