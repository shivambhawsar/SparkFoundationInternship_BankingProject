import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {

  userId: number;
  details: UsersEntity[] = [];
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>=new Subject();

  constructor(private route: ActivatedRoute, private service: UsersServiceService, private router: Router) {
    this.userId = this.route.snapshot.params['userId'];
  }

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

  selectCustomer(userId:number){
    let id:string=userId+' ';
    id=id.concat(this.userId+'');
    this.router.navigate(['selectCustomer', id])
  }

}
