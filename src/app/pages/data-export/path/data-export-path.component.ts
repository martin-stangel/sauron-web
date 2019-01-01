import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataExportPath } from '../../../models/data-export-template';


@Component({
  selector: 'app-data-export-path',
  templateUrl: './data-export-path.component.html',
  styleUrls: ['./data-export-path.component.css']
})
export class DataExportPathComponent implements OnInit, OnChanges {

  @Input()
  path: DataExportPath;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges( changes: SimpleChanges ) {
    if (changes['path']) {
    }
  }
}
