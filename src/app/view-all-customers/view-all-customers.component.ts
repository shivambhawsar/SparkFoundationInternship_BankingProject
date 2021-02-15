import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsersServiceService } from '../service/users-service.service';

export class UsersEntity{

  constructor(
    public userId:number,
    public username:string,
    public email:string,
    public balance:number,
    public number:string
  ) { }

  public getUserId() {
		return this.userId;
	}
	public getUsername() {
		return this.username;
	}
	public getEmail() {
		return this.email;
	}
	public getBalance() {
		return this.balance;
	}
	public getNumber() {
		return this.number;
	}

}

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  details: UsersEntity[] = [];
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>=new Subject();

  constructor(private service: UsersServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.findAllUsers().subscribe( 
      response => {
        this.details = response;
        this.dtTrigger.next();
      }
    );
    this.dtOptions={
      pagingType:'full_numbers',
      lengthMenu:[5, 10, 15, 20]
    };
  }

  viewCustomer(userId:number){
    this.router.navigate(['viewCustomer', userId])
  }

}
