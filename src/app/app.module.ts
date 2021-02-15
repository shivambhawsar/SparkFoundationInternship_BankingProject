import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './blank/blank.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LbarComponent } from './lbar/lbar.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { SelectCustomerComponent } from './select-customer/select-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FooterComponent,
    HeaderComponent,
    LbarComponent,
    ViewAllCustomersComponent,
    ViewCustomerComponent,
    TransferMoneyComponent,
    SelectCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
