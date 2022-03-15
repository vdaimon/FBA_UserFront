import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Transaction } from './transaction/transaction';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getBalance(){
    return this.http.get('https://localhost:7095/api/balance');
  }
  getBalanceHistory(){
    return this.http.get('https://localhost:7095/api/Balance/balanceList');
  }
  addTransaction(transaction:Transaction){
    return this.http.post('https://localhost:7095/api/transactions', transaction);
  }
}
