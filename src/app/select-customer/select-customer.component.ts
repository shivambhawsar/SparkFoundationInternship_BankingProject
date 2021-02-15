import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../service/users-service.service';
import { UsersEntity } from '../view-all-customers/view-all-customers.component';

export class TransactionDTO {

  constructor(
    private transactionId: number,
    private toUserId: number,
    private amount: number,
    private fromUserId: number
  ) { }

  public getTransactionId() {
    return this.transactionId;
  }
  public getToUserId() {
    return this.toUserId;
  }
  public getAmount() {
    return this.amount;
  }
  public getFromUserId() {
    return this.fromUserId;
  }

}

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.css']
})
export class SelectCustomerComponent implements OnInit {

  id: string;
  fromUserId: number;
  toUserId: number;
  fromUserName: string = '';
  toUserName: string = '';
  details: UsersEntity = new UsersEntity(0, '', '', 0, '');
  success: boolean = false;
  sendMoney: number = 0;
  balance: number = 0;

  constructor(private route: ActivatedRoute, private service: UsersServiceService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    let str = this.id.split(' ');
    this.toUserId = parseInt(str[0]);
    this.fromUserId = parseInt(str[1]);
    this.service.findUsersById(this.toUserId).subscribe(
      response => {
        this.details = response;
        this.toUserName = this.details.username
      }
    )
    this.service.findUsersById(this.fromUserId).subscribe(
      response => {
        this.details = response;
        this.fromUserName = this.details.username
        this.balance = this.details.balance;
      }
    );
  }

  send() {
    console.log('ghfhg')
    var transactionDTO: TransactionDTO = new TransactionDTO(0,  this.toUserId, this.sendMoney, this.fromUserId);
    this.service.transferMoney(transactionDTO).subscribe(
      response => {
        this.success = response;
        if (this.success == true){
          alert('Transaction Successful!! \n' + 'Remaining Balance : '+ (this.balance - this.sendMoney));
          this.router.navigate(['viewAllCustomers']);
        }
        else
          alert('Do not have Enough Money!!');
      }
    );
  }

  ngOnInit(): void {
  }

}

