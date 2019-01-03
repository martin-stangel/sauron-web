import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { DataExportService } from '../../../services/data-export.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataExportTemplate, DataExportPath } from '../../../models/data-export-template';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-data-export-edit',
  templateUrl: './data-export-edit.component.html',
  styleUrls: ['./data-export-edit.component.css']
})
export class DataExportEditComponent {
  paths: DataExportPath[];
  formGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public template: DataExportTemplate,
    public dialogRef: MatDialogRef<DataExportEditComponent>
  ) {
    this.paths = template.paths;
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  trackByIndex(index: number, path: DataExportPath): any {
    return index;
  }

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  newPath() {
    this.paths.push({
      sourcePath: '',
      wildcards: ['*'],
      recursive: true,
    });
  }

  deletePath(path: DataExportPath) {
    const index = this.paths.indexOf(path);
    this.paths.splice(index, 1);
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    // this.dataExportService.update(this.template);
  }
}
