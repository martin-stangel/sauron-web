import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataExportService} from '../../services/data-export.service';
import { DataExportTemplate } from 'src/app/models/data-export-template';

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.css']
})
export class DataExportComponent implements OnInit {
  templates: DataExportTemplate[];

  constructor(public dataExportService: DataExportService) {}

  ngOnInit(): void {
    this.dataExportService.getAll().subscribe( templates => {
      this.templates = templates;
    });
  }

  newTemplate(): void {
  }

  edit(template: DataExportTemplate) {
  }
  execute(template: DataExportTemplate) {
  }
  delete(template: DataExportTemplate) {
  }
}
