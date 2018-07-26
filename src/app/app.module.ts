import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { myRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    RouterModule,
    myRoutes
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [ EmployeeDetailsComponent ]
})
export class AppModule { }
