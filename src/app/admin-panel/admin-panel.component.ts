import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { respUser } from '../respUser';
import { respLiga } from '../respLiga';
import { LigaService } from '../liga.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor(){}

  ngOnInit(){
  }

}
