import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Share } from './data-export.model';

@Injectable({ providedIn: 'root' })
export class ShareService {
  shares: Share[] = [
      {
        path: '//1.2.3.4/share',
        username: 'user',
        password: 'pass',
        workgroup: 'WORKGROUP'
      },
      {
        path: '//samba/share',
        username: 'user2',
        password: 'pass2',
        workgroup: 'WORKGROUP'
      },
    ];

    constructor(private http: HttpClient) { }

    getAll(): Promise<Share[]> {
      // TODO: send HTTP get here instead
      return new Promise<Share[]>(() => this.shares);
    }

    post(template: Share): Promise<Share[]> {
      // TODO: send HTTP post here instead
      this.shares.unshift(template);
      return this.getAll();
    }

    put(templateIndex: number, template: Share): Promise<Share[]> {
      // TODO: send HTTP put here instead
      this.shares[templateIndex] = template;
      return this.getAll();
    }

    delete(templateIndex: number): Promise<Share[]> {
      this.shares.splice(templateIndex, 1);
      // TODO: send HTTP delete here instead
      return this.getAll();
    }
}
