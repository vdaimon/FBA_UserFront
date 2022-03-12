import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Balance } from './balance/balance';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getBalance(){
        return this.http.get('https://localhost:7095/api/balance');
    }
}
