import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { Balance } from '../balance/balance';

@Component({
  selector: 'app-balanceHistory',
  templateUrl: './balanceHistory.component.html',
  styleUrls: ['./balanceHistory.component.scss'],
  providers: [HttpService]
})
export class BalanceHistoryComponent implements OnInit {

  balanceHistory: Balance[] = new Array()

  constructor(private httpService: HttpService) { }

  getBalanceHistory(){
    if(this.balanceHistory.length<=0)
    {
      this.httpService.getBalanceHistory().subscribe((data: any) => {
        this.balanceHistory=data;
        this.balanceHistory.sort((x,y)=>y.id-x.id);
      });
    }
    else this.balanceHistory = new Array();
  }

  ngOnInit() {
  }

}
