import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { DataExportTemplate, DataExportPath } from '../models/data-export-template';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataExportShareService {
  templates: DataExportTemplate[] = [
      {
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
              '*.avi',
              '*.mov'
            ]
          },
          {
            sourcePath: '/source3',
            recursive: false,
            wildcards: [
              '*.avi',
              '*.mov'
            ]
          }
        ],
        deleteSource: true
      },
      {
        name: 'Template2',
        paths: [
          {
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
    ];

    constructor(private http: HttpClient) { }

    getAll(): Promise<DataExportTemplate[]> {
      // TODO: send HTTP get here instead
      return new Promise<DataExportTemplate[]>(() => this.templates);
    }

    post(template: DataExportTemplate): Promise<DataExportTemplate[]> {
      // TODO: send HTTP post here instead
      this.templates.unshift(template);
      return this.getAll();
    }

    put(templateIndex: number, template: DataExportTemplate): Promise<DataExportTemplate[]> {
      // TODO: send HTTP put here instead
      this.templates[templateIndex] = template;
      return this.getAll();
    }

    delete(templateIndex: number): Promise<DataExportTemplate[]> {
      this.templates.splice(templateIndex, 1);
      // TODO: send HTTP delete here instead
      return this.getAll();
    }
}
