import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  constructor(private seller:SellerService , private router:Router){}
postData:any=""


  async signUp(value:any){
console.log(value)
this.seller.signUp()

//  this.seller.postApiCall(value).subscribe(result=>{
//   console.log(result)
  
//  })
this.postData=await this.seller.postApiCall(value)?.toPromise()
console.log(this.postData)
if(this.postData?.id){
this.router.navigateByUrl("home")
}
  }

  password:any=''
  confirmPassword:any=''
  confirmPasswordError:boolean=false
  passwordData(passValue:any){
    console.log(passValue,"this is password")
    this.password=passValue
  }

  confirmPasswordData(confirmPasswordValue:any){
    console.log(confirmPasswordValue,"this is confirmpassword")
    this.confirmPassword=confirmPasswordValue

    if(this.password!==this.confirmPassword){
       this.confirmPasswordError=true
    }
    else{
      this.confirmPasswordError=false
    }
  }

}
