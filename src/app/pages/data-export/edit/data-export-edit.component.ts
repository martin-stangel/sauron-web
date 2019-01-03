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

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public template: DataExportTemplate,
    public dialogRef: MatDialogRef<DataExportEditComponent>
  ) {
    this.paths = template.paths;
  }

  trackByIndex(index: number, path: DataExportPath): any {
    return index;
  }

  newPath() {
    this.paths.unshift({
      sourcePath: '',
      wildcards: ['*'],
      recursive: true,
    });
  }

  deletePath(path: DataExportPath) {
    const index = this.paths.indexOf(path);
    this.paths.splice(index, 1);
  }
}
