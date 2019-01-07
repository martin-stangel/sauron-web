import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatTreeModule,
  MatSelectModule,
  MatChipsModule,
  MatTooltipModule,
} from '@angular/material';
import { routing } from './app.routing';

import * as DataExport from './data-export';
import * as Main from './main';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// used to create fake backend

@NgModule({
  declarations: [
    AppComponent,
    Main.LoginComponent,
    Main.NavigationComponent,
    DataExport.PageComponent,
    DataExport.EditShareComponent,
    DataExport.EditTemplateComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatSelectModule,
    MatChipsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  entryComponents: [
    Main.NavigationComponent,
    Main.LoginComponent,
    DataExport.PageComponent,
    DataExport.EditTemplateComponent,
    DataExport.EditShareComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Main.JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Main.ErrorInterceptor, multi: true },
    // use fake backend in place of Http service for backend-less development
    { provide: HTTP_INTERCEPTORS, useClass: Main.FakeBackendInterceptor, multi: true },

    Main.AuthenticationService,
    DataExport.ShareService,
    DataExport.TemplateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
