import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { SelectCustomerComponent } from './select-customer/select-customer.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  { path: '', component: BlankComponent },
  { path: 'viewCustomer/:userId', component: ViewCustomerComponent },
  { path: 'viewAllCustomers', component: ViewAllCustomersComponent },
  { path: 'transferMoney/:userId', component: TransferMoneyComponent },
  { path: 'selectCustomer/:id', component: SelectCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
