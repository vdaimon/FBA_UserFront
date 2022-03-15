import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BalanceHistoryComponent } from './balanceHistory/balanceHistory.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    TransactionComponent,
    BalanceHistoryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BalanceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
