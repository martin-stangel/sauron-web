import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DataExportService} from '../../services/data-export.service';
import { DataExportTemplate } from '../../models/data-export-template';
import { DataExportEditComponent } from './edit/data-export-edit.component';

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.css']
})
export class DataExportComponent implements OnInit {
  templates: DataExportTemplate[];

  constructor(
    public dataExportService: DataExportService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataExportService.getAll().subscribe( templates => {
      this.templates = templates;
    });
  }

  newTemplate(): void {
  }

  edit(template: DataExportTemplate) {
    const dialogRef = this.dialog.open(DataExportEditComponent,
      {
        data: template,
        height: 'auto'
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // TODO: refresh data (maybe?)
      }
    });
  }
  execute(template: DataExportTemplate) {
  }
  delete(template: DataExportTemplate) {
  }
}
