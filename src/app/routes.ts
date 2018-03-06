import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeDashComponent } from './components/employee-dash/employee-dash.component';
import { ManagerDashComponent } from './components/manager-dash/manager-dash.component';
import { StatusButtonsComponent } from './components/status-buttons/status-buttons.component';
import { AllTableComponent } from './components/status-buttons/all-table/all-table.component';
import { PendingTableComponent } from './components/status-buttons/pending-table/pending-table.component';
import { ApprovedTableComponent } from './components/status-buttons/approved-table/approved-table.component';
import { DeniedTableComponent } from './components/status-buttons/denied-table/denied-table.component';

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'employees',
        component: EmployeeDashComponent
    },
    {
        path: 'managers',
        component: ManagerDashComponent
    },
    {
        path: 'status-buttons',
        component: StatusButtonsComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];

// ,
//         children: [
//             { 
//                 path: 'all-table',
//                 component: AllTableComponent
//             },
//             {
//                 path: 'pending-table',
//                 component: PendingTableComponent
//             },
//             {
//                 path: 'approved-table',
//                 component: ApprovedTableComponent
//             },
//             {
//                 path: 'denied-table',
//                 component: DeniedTableComponent
//             },
//             {
//               path: '**',
//               pathMatch: 'full',
//               redirectTo: '/status-buttons'
//             }
//           ]      