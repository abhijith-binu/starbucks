import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{

  foods: any=[]
  searchTerm:string=""

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getdrinks().subscribe(
      (result:any) => {
        console.log(result);
        this.foods = result
      }
    )
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm = result
      console.log(this.searchTerm);
    })
  }

}
