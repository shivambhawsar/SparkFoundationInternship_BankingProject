import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersEntity } from '../view-all-customers/view-all-customers.component';
import { TransactionDTO } from '../select-customer/select-customer.component';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  findAllUsers() {
    return this.http.get<UsersEntity[]>(`http://localhost:8080/findAllUsers`);
  }

  findUsersById(userId: number) {
    return this.http.get<UsersEntity>(`http://localhost:8080/findUsersById/${userId}`);
  }

  transferMoney(transactionDTO:TransactionDTO){
    return this.http.post<boolean>(`http://localhost:8080/transferMoney`, transactionDTO);
  }
}