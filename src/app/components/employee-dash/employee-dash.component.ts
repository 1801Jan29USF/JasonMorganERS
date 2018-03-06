import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';
import { Ticket } from '../../beans/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {

  constructor(private client: HttpClient, private userService: UserService, private router: Router) { }

  tickets: Array<Ticket>;

  ngOnInit() {
    console.log(this.user.id);
    this.client.post('http://localhost:8080/expense-reimbursement/view', this.user)
      .subscribe(
        (success: Array<Ticket>) => {
          this.tickets = success;          
        },
        error => {
          //alert('Failed to retrieve reimbursement.');
        });
  }

  user = this.userService.getMe();

  submitTicket = {
    amount: '',
    description: '',
    typeID: 1
  };

  newReimb() {
    console.log(this.submitTicket);
    this.client.post('http://localhost:8080/expense-reimbursement/submit', this.submitTicket)
      .subscribe(
        success => {
          //alert('Success');
          window.location.reload;
          this.ngOnInit();
        },
        error => {
          //alert('Failed to submit reimbursement.');
        });
  }

  viewReimb() {
    console.log(this.user.id);
    this.client.post('http://localhost:8080/expense-reimbursement/view', this.user)
      .subscribe(
        (success: Array<Ticket>) => {
          this.tickets = success;
        },
        error => {
          //alert('Failed to retrieve reimbursement.');
        });
  }

  getUser() {
    return this.user;
  }

  logOut= function () {
    this.router.navigateByUrl('/login');
};

}
