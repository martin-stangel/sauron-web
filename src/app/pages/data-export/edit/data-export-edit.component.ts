import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { DataExportService } from '../../../services/data-export.service';
import { FormControl, Validators } from '@angular/forms';
import { DataExportTemplate, DataExportPath } from '../../../models/data-export-template';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-data-export-edit',
  templateUrl: './data-export-edit.component.html',
  styleUrls: ['./data-export-edit.component.css']
})
export class DataExportEditComponent {
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

  deletePath(path: DataExportPath) {
    const template = new DataExportTemplate();
    Object.assign(template, this.template);
    const paths = template.paths;
    const index = paths.indexOf(path);
    delete paths[index];
    this.template = template;
    location.reload();
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
