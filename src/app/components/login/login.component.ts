import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential = {
  username: '',
  password: ''
  };

  constructor(private client: HttpClient, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.client.post('http://localhost:8080/expense-reimbursement/login', this.credential,
    {withCredentials: true})
      .subscribe(
        data => {  
          
          this.userService.saveMe(data);
          if(this.userService.getMe().userRoleId == 1) {
            this.router.navigateByUrl('employees');
          } else if(this.userService.getMe().userRoleId == 2) {
            this.router.navigateByUrl('managers');
          }
        },
        (err) => {
          alert('failed to log in');
        }
      );
  }

}
