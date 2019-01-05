import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { map, filter } from 'rxjs/operators';

import { Template, Share } from './data-export.model';
import { TemplateService } from './template.service';
import { ShareService } from './share.service';
import { EditTemplateComponent } from './edit-template.component';

@Component({
  selector: 'app-data-export-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  templates: Template[];
  shares: Share[];

  constructor(
    public service: TemplateService,
    public shareService: ShareService,
    public dialog: MatDialog) {
    this.templates = service.templates;
    this.shares = shareService.shares;
  }

  ngOnInit(): void {
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  openEditDialog(template: Template) {
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

  newTemplate(): void {
    const newTemplate: Template = {
      name: '',
      deleteSource: false,
      paths: []
    };
    this.openEditDialog(newTemplate).subscribe(result => {
      this.service.post(result);
    });
  }

  edit(templateIndex: number) {
    const editedTemplate = JSON.parse(JSON.stringify(this.templates[templateIndex]));
    this.openEditDialog(editedTemplate).subscribe(result => {
      this.service.put(templateIndex, result);
    });
  }

  execute(template: Template) {
  }

  newShare(): void {
  }
}
