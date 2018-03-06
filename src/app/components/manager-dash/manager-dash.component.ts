import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../user.service';
import { Ticket } from '../../beans/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dash',
  templateUrl: './manager-dash.component.html',
  styleUrls: ['./manager-dash.component.css']
})
export class ManagerDashComponent implements OnInit {

  updateTicket = {
    statusID: 0,
    id: 0
  };

  constructor(private client: HttpClient, private userService: UserService, private router: Router) { }

  tickets: Array<Ticket>;

  ngOnInit() {
    this.viewReimb();  
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

  update(statusID: number, id: number) {
    this.updateTicket.id = id;
    this.updateTicket.statusID = statusID;
    this.client.post('http://localhost:8080/expense-reimbursement/update', this.updateTicket, 
    {withCredentials: true})
      .subscribe(
        (success) => {
          if(this.updateTicket.statusID === 2) {
            //alert("Approved");
            this.viewReimb();
          } else if(this.updateTicket.statusID === 3) {
            //alert("Denied");
            this.viewReimb();
          }
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
  }

}

// <!-- <select name="status" [(ngModel)]="statusFilter">
//    <option [ngValue]="1">Pending</option>
//    <option [ngValue]="2">Approved</option>
//    <option [ngValue]="3">Denied</option>
// </select>
// <button class="btn btn-primary" type="submit">Submit</button> -->


// <!-- <div *ngFor="let t of (tickets | statusID:statusFilter)">
//   <app-ticket [ticket]="t"></app-ticket>
// </div> -->