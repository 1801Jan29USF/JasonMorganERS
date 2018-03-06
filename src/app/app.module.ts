import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { EmployeeDashComponent } from './components/employee-dash/employee-dash.component';
import { ManagerDashComponent } from './components/manager-dash/manager-dash.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { User } from './beans/user';
import { UserService } from './user.service';
import { StatusButtonsComponent } from './components/status-buttons/status-buttons.component';
import { AllTableComponent } from './components/status-buttons/all-table/all-table.component';
import { PendingTableComponent } from './components/status-buttons/pending-table/pending-table.component';
import { ApprovedTableComponent } from './components/status-buttons/approved-table/approved-table.component';
import { DeniedTableComponent } from './components/status-buttons/denied-table/denied-table.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule
  ],

  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    JumbotronComponent,
    EmployeeDashComponent,
    ManagerDashComponent,
    FooterComponent,
    UserComponent,
    TicketComponent,
    StatusButtonsComponent,
    AllTableComponent,
    PendingTableComponent,
    ApprovedTableComponent,
    DeniedTableComponent,
    FilterPipe
  ],
  providers: [UserComponent, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
