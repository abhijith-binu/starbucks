import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  // to hold search -behaviour subject
  searchTerm = new BehaviorSubject('')

  BASE_URL = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  // import bestseller
  getbestsellers(){
    // api
    return this.http.get(`${this.BASE_URL}/products/bestseller`)

}
   
  // import drinks
  getdrinks(){
    // api
    return this.http.get(`${this.BASE_URL}/products/drinks`)
  }

  // import foods
  getfoods(){
    // api
    return this.http.get(`${this.BASE_URL}/products/foods`)
  }

  // import merchandises
  getmerchandises(){
    // api
    return this.http.get(`${this.BASE_URL}/products/merchandises`)
  }

  // import coffees
  getcoffees(){
    // api
    return this.http.get(`${this.BASE_URL}/products/coffees`)
  }

  // import eats
  geteats(){
    // api
    return this.http.get(`${this.BASE_URL}/products/readytoeat`)
  }

  // add to cart
  addtocart(product:any){
    // get id,title,image,price,quantity
    const body={
      id:product.id,
      title:product.title,
      image:product.image,
      price:product.price,
      quantity:product.quantity
    }
    // api
    return this.http.post(`${this.BASE_URL}/cart/add-product`,body)
  }

  // cart/all-products
  getCart(){
    // api
    return this.http.get(`${this.BASE_URL}/cart/all-products`)
  }

  // cart/remove-item
removecartitem(id:any){
  return this.http.delete(`${this.BASE_URL}/cart/remove-item/${id}`)
}
}

