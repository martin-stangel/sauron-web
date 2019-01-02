import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { DataExportTemplate, DataExportPath } from '../models/data-export-template';
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface DataExportTemplateMap {
  [id: number]: DataExportTemplate;
}

@Injectable({ providedIn: 'root' })
export class DataExportService {
  dataChange: BehaviorSubject<DataExportTemplate[]> =
    new BehaviorSubject<DataExportTemplate[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;


  templates: {
      [id: number]: DataExportTemplate;
    } =
    {
      0:
      {
        id: 0,
        name: 'Template1',
        paths: [
          {
            sourcePath: '/source1',
            recursive: true,
            wildcards: [
              '*'
            ]
          },
          {
            sourcePath: '/source2',
            recursive: false,
            wildcards: [
              '*.avi *.mov'
            ]
          }
        ],
        deleteSource: true
      },
      1: {
        id: 1,
        name: 'Template2',
        paths: [
          {
            id: 0,
            sourcePath: '/source2',
            recursive: false,
            wildcards: [
              '*.avi',
              '*.mov',
            ]
          }
        ],
        deleteSource: false
      }
    };

    constructor(private http: HttpClient) { }

    get data(): DataExportTemplate[] {
      return this.dataChange.value;
    }

    getDialogData() {
      return this.dialogData;
    }

    getAll(): Observable<DataExportTemplate[]> {
        return of(Object.values(this.templates));
    }

    getById(id: number): Observable<DataExportTemplate> {
      if (this.templates.hasOwnProperty(id)) {
        return of(this.templates[id]);
      } else {

      }
        return of(null);
    }

    update(template: DataExportTemplate): Observable<DataExportTemplate> {
      this.templates[template.id] = template;
      return of(template);
    }

    delete(id: number): void {
        delete this.templates[id];
    }
}
