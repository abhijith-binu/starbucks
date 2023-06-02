import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit{

  drinks: any=[]
  searchTerm:string=""


  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getdrinks().subscribe(
      (result:any) => {
        console.log(result);
        this.drinks = result
      }
    )
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm = result
      console.log(this.searchTerm);
    })
  }

}
