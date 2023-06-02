import { Component } from '@angular/core';
import { ApiService } from '../products/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private api:ApiService){}

  search(event:any){
    console.log(event.target.value);
    this.api.searchTerm.next(event.target.value)
  }

}
