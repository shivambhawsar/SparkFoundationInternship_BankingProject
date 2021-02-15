import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../service/users-service.service';
import { UsersEntity } from '../view-all-customers/view-all-customers.component';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  usersEntity: UsersEntity;
  userId: number;

  constructor(private route: ActivatedRoute, private service: UsersServiceService, private router: Router) {
    this.usersEntity = new UsersEntity(0, '', '', 0, '');
    this.userId = this.route.snapshot.params['userId'];
    this.service.findUsersById(this.userId).subscribe(
      response => {
        this.usersEntity = response;
      }
    );
  }

  ngOnInit(): void {
  }

  transferMoney(userId:number){
    this.router.navigate(['transferMoney', userId])
  }

}
