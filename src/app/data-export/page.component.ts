import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { map, filter } from 'rxjs/operators';

import { Template, Share } from './data-export.model';
import { TemplateService } from './template.service';
import { ShareService } from './share.service';
import { EditTemplateComponent } from './edit-template.component';
import { EditShareComponent } from './edit-share.component';

@Component({
  selector: 'app-data-export-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  templates: Template[];
  shares: Share[];

  constructor(
    public templateService: TemplateService,
    public shareService: ShareService,
    public dialog: MatDialog) {
    this.templates = templateService.templates;
    this.shares = shareService.shares;
  }

  ngOnInit(): void {
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  openTemplateEditDialog(template: Template) {
    const dialogRef = this.dialog.open(EditTemplateComponent,
      {
        data: template,
        height: 'auto'
      });

    return dialogRef.afterClosed().pipe(
      filter(result => result === 1),
      map(result => template)
    );
  }

  openShareEditDialog(share: Share) {
    const dialogRef = this.dialog.open(EditShareComponent,
      {
        data: share,
        height: 'auto'
      });

    return dialogRef.afterClosed().pipe(
      filter(result => result === 1),
      map(result => share)
    );
  }

  newTemplate(): void {
    const newTemplate: Template = {
      name: '',
      deleteSource: false,
      paths: []
    };
    this.openTemplateEditDialog(newTemplate).subscribe(result => {
      this.templateService.post(result);
    });
  }

  editTemplate(templateIndex: number) {
    const editedTemplate = JSON.parse(JSON.stringify(this.templates[templateIndex]));
    this.openTemplateEditDialog(editedTemplate).subscribe(result => {
      this.templateService.put(templateIndex, result);
    });
  }

  executeTemplate(template: Template) {
  }

  newShare(): void {
    const newShare: Share = {
      path: '//',
      username: '',
      password: '',
      workgroup: 'WORKGROUP'
    };
    this.openShareEditDialog(newShare).subscribe(result => {
      this.shareService.post(result);
    });
  }

  editShare(shareIndex: number) {
    const editedShare = JSON.parse(JSON.stringify(this.shares[shareIndex]));
    this.openShareEditDialog(editedShare).subscribe(result => {
      this.shareService.put(shareIndex, result);
    });
  }
}
