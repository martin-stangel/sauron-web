import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import {DataExportShareService} from './services/data-export-share.service';
import {AuthenticationService} from './services/authentication.service';
import {LoginComponent} from './pages/login/login.component';
import {DataExportComponent} from './pages/data-export/data-export.component';
import {DataExportEditComponent} from './pages/data-export/edit/data-export-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './pages/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataExportComponent,
    DataExportEditComponent,
    NavigationComponent
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
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginComponent,
    DataExportComponent,
    DataExportEditComponent,
    NavigationComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    DataExportShareService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
