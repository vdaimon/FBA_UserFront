import {User} from './user'

export class Transaction{
  constructor(public id:number, public user:User, public dateTime:Date, public amount:number, public isIncome:boolean){}
}
