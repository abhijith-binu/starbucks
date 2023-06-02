import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public payPalConfig?: IPayPalConfig;

  allproducts:any=[]
  cartTotalprice:number=0
  proceedtopaymentbtnclickedstatus:boolean = false
  username:string=""
  flat:string=""
  street:string=""
  state:string=""
  showSuccess:boolean=false
  showCancel:boolean=false
  showError:boolean=false
  showPaypal:boolean=false

  addressForm= this.fb.group({
    username:[''],
    flat:[''],
    street:[''],
    state:['']
  })

  constructor(private api:ApiService,private fb:FormBuilder){}

  ngOnInit(): void {
   this.api.getCart().subscribe(
    // 200
    (result:any)=>{
      console.log(result);
      this.allproducts=result
      this.getCartTotal()
    },
    // 400
    (result:any)=>{
      console.log(result.error);
      
    }
   )
  //  paypal
  this.initConfig()
  }

  // get cart total
  getCartTotal(){
    let total=0
    this.allproducts.forEach((item:any)=>{
      total += item.granttotal
      this.cartTotalprice = Math.ceil(total)
    })
  }

  // removeitem
  removeitem(id:any){
    this.api.removecartitem(id).subscribe(
      (result:any)=>{
        this.allproducts = result
        this.getCartTotal()
        // update cart total count
        this.api['cartCount']()
      },
      (result:any)=>{
        alert(result.error)
      }
    )
  }
  sumbitBtnClicked(){
    if(this.addressForm.valid){
      this.proceedtopaymentbtnclickedstatus = true
      this.username = this.addressForm.value.username||""
      this.flat = this.addressForm.value.flat||""
      this.street = this.addressForm.value.street||""
      this.state = this.addressForm.value.state||""


    }
    else{
      alert('Please enter valid inputs')
    }
  }

  makepayment(){
   this.showPaypal=true
  }

  // // paypal

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details:any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
      // hide paypal div
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
      this.showError=true
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

}
