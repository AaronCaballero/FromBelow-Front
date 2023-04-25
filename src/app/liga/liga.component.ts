import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent {

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      console.log(params['id'])
    })
  }
}
