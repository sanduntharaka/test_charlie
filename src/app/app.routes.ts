import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TimeCardComponent } from './pages/time-card/time-card.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { TaskCompleteComponent } from './pages/task-complete/task-complete.component';
import { TaskCancelComponent } from './pages/task-cancel/task-cancel.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: TimeCardComponent
    },
    {
        path: 'task-list',
        component: TaskListComponent
    },
    {
        path: 'task-list/:id',
        component: TaskDetailComponent
    },
    {
        path: 'task-list/:id/complete',
        component: TaskCompleteComponent
    },
    {
        path: 'task-list/:id/cancel',
        component: TaskCancelComponent
    }      
];
