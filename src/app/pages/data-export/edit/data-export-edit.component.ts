import {SPACE, ENTER, COMMA} from '@angular/cdk/keycodes';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
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
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, SPACE, COMMA];

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

  addWildcard(pathIndex: number, event: MatChipInputEvent): void {
    const wildcards = this.paths[pathIndex].wildcards;

    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      wildcards.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeWildcard(pathIndex: number, wildcard: string): void {
    const wildcards = this.paths[pathIndex].wildcards;
    const index = wildcards.indexOf(wildcard);

    if (index >= 0) {
      wildcards.splice(index, 1);
    }
  }
}
