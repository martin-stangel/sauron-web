/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataExportPathComponent } from './data-export-path.component';

describe('DataExportPathComponent', () => {
  let component: DataExportPathComponent;
  let fixture: ComponentFixture<DataExportPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataExportPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataExportPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
