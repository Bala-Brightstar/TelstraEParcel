import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceiptServiceService {

  constructor(private _http: HttpClient) { }

  public getReceipt(){
    return this._http.get(`https://6m7vbnxxne.execute-api.us-east-2.amazonaws.com/dev/receipt/`);
  }
}
