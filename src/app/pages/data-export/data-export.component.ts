import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DataExportService} from '../../services/data-export.service';
import { DataExportTemplate } from '../../models/data-export-template';
import { DataExportEditComponent } from './edit/data-export-edit.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.css']
})
export class DataExportComponent implements OnInit {
  templates: DataExportTemplate[];

  constructor(
    public dataExportService: DataExportService,
    public dialog: MatDialog) {
      this.templates = dataExportService.templates;
    }

  ngOnInit(): void {
  }

  trackByIndex(index: number, template: DataExportTemplate): any {
    return index;
  }

  openEditDialog(template: DataExportTemplate) {
    const dialogRef = this.dialog.open(DataExportEditComponent,
      {
        data: template,
        height: 'auto'
      });

    return dialogRef.afterClosed();
  }

  newTemplate(): void {
    const newTemplate: DataExportTemplate = {
      name: '',
      deleteSource: false,
      paths: []
    };
    this.openEditDialog(newTemplate).subscribe(result => {
      if (result === 1) {
        this.dataExportService.put(newTemplate);
      }
    });
  }

  edit(template: DataExportTemplate) {
    this.openEditDialog(template).subscribe(result => {
      if (result === 1) {
        this.dataExportService.post(template);
      }
    });
  }

  execute(template: DataExportTemplate) {
  }
}
