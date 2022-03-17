export class Transaction{
  constructor(public id:number, public dateTime:Date, public amount:number, public isIncome:boolean, public userId:number){}
}
