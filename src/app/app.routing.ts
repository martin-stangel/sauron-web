import { Routes, RouterModule } from '@angular/router';

import * as DataExport from './data-export';
import * as Main from './main';

const appRoutes: Routes = [
    { path: '', component: DataExport.PageComponent, canActivate: [Main.AuthGuard] },
    { path: 'data-export', component: DataExport.PageComponent, canActivate: [Main.AuthGuard] },
    { path: 'login', component: Main.LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
