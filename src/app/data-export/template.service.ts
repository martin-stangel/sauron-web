import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Template, Path } from './data-export.model';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  templates: Template[] = [
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

    getAll(): Promise<Template[]> {
      // TODO: send HTTP get here instead
      return new Promise<Template[]>(() => this.templates);
    }

    post(template: Template): Promise<Template[]> {
      // TODO: send HTTP post here instead
      this.templates.unshift(template);
      return this.getAll();
    }

    put(templateIndex: number, template: Template): Promise<Template[]> {
      // TODO: send HTTP put here instead
      this.templates[templateIndex] = template;
      return this.getAll();
    }

    delete(templateIndex: number): Promise<Template[]> {
      this.templates.splice(templateIndex, 1);
      // TODO: send HTTP delete here instead
      return this.getAll();
    }
}
