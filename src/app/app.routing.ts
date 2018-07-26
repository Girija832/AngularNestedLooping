import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const appRoutes: Routes = [
    { path: '', component : EmployeeListComponent },
    { path: 'employeeDetails', component: EmployeeDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class myRoutes {}