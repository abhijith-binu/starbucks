import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit{

  merchandises: any=[]
  searchTerm:string=""


  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getmerchandises().subscribe(
      (result:any) => {
        console.log(result);
        this.merchandises = result
      }
    )
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm = result
      console.log(this.searchTerm);
    })
  }


}
