import {SPACE, ENTER, COMMA} from '@angular/cdk/keycodes';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { Template, Path } from './data-export.model';

@Component({
  selector: 'app-data-export-edit',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent {
  paths: Path[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, SPACE, COMMA];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public template: Template,
    public dialogRef: MatDialogRef<EditTemplateComponent>
  ) {
    this.paths = template.paths;
  }

  trackByIndex(index: number, path: Path): any {
    return index;
  }

  newPath() {
    this.paths.unshift({
      sourcePath: '',
      wildcards: ['*'],
      recursive: true,
    });
  }

  deletePath(path: Path) {
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
