import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpClient:HttpClient) { }

  signUp(){
    console.log('this is servide data')
  }

  url="http://localhost:3000/posts"
postApiCall(formData:any){
 return this.httpClient.post(this.url,formData)
}
}
