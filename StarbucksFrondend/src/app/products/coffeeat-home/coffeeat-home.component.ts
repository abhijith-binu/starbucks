import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coffeeat-home',
  templateUrl: './coffeeat-home.component.html',
  styleUrls: ['./coffeeat-home.component.css']
})
export class CoffeeatHomeComponent implements OnInit{

  coffees:any=[]
  searchTerm:string=""

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getcoffees().subscribe(
      (result:any)=>{
        console.log(result);
        this.coffees = result
      }
    )
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm = result
      console.log(this.searchTerm);
    })
  }

}
