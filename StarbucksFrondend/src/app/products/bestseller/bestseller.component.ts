import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit{

  bestsellers:any=[]
  searchTerm:string=''

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getbestsellers().subscribe(
      (result:any)=>{
        console.log(result);
        this.bestsellers = result
      }
    )

    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm = result
      console.log(this.searchTerm);
    })
    
  }

  // addtocart(product)
addtocart(product:any){

  // add {quantity:1} to product object
  Object.assign(product,{quantity:1})

  console.log(product);
  

  // api call
  this.api.addtocart(product).subscribe(
    // 200
    (result:any)=>{
      alert(result)
    },
    // 400
    (result:any)=>{
      alert(result.error)
    }

  )
}

}

