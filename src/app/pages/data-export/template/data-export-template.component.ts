import { Component, OnInit, Input } from '@angular/core';
import { DataExportTemplate } from '../../../models/data-export-template';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-export-template',
  templateUrl: './data-export-template.component.html',
  styleUrls: ['./data-export-template.component.css']
})
export class DataExportTemplateComponent implements OnInit {
  @Input()
  editable: boolean;

  @Input()
  template: DataExportTemplate;

  constructor() { }

  ngOnInit() {
  }

}
