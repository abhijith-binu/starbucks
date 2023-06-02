import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-readytoeat',
  templateUrl: './readytoeat.component.html',
  styleUrls: ['./readytoeat.component.css']
})
export class ReadytoeatComponent implements OnInit{

   eats : any=[]
   searchTerm:string=""

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.geteats().subscribe(
      (result:any) => {
        console.log(result);
        this.eats = result
      }
    )
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm = result
      console.log(this.searchTerm);
    })
  }


}
