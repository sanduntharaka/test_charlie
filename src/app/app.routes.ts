import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TimeCardComponent } from './pages/time-card/time-card.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: TimeCardComponent
    }
];
