import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { HttpService} from '../http.service';
import { User } from './user';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [HttpService]
})
export class TransactionComponent{

  transaction: Transaction = new Transaction(0, new User(0,""), new Date(), 0, false );
  done:boolean = false;

  constructor(private httpService: HttpService) { }

  submit(transaction:Transaction) {
    this.httpService.addTransaction(this.transaction).subscribe(
      (data: any) => {this.done=true;},
      error => console.log(error)
  );;
  }

}
