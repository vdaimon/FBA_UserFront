import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { Balance } from './balance';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
  providers: [HttpService]
})
export class BalanceComponent implements OnInit {

  receivedBalance: Balance| undefined;

  constructor(private httpService: HttpService) { }

  getBalance(){
    this.httpService.getBalance()
     .subscribe((data: any) => {
         this.receivedBalance=data;
         if(this.receivedBalance!=undefined)
         {
           this.receivedBalance.dateTime = new Date (this.receivedBalance.dateTime);
         }
        },
      error => console.log(error));
  }

  ngOnInit(): void{
    this.getBalance();
    }
  }

