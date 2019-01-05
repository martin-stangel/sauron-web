import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { Share } from './data-export.model';

@Component({
  selector: 'app-data-export-edit-share',
  templateUrl: './edit-share.component.html',
  styleUrls: ['./edit-share.component.css']
})
export class EditShareComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public share: Share,
    public dialogRef: MatDialogRef<EditShareComponent>
  ) {
  }

}
