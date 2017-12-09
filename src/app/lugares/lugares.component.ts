import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.services';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lat:number = 4.6560663;
  lng:number = -74.0595918;
  lugares = null;
  constructor(private  LugaresService:LugaresService){
    this.lugares = LugaresService.getLugares();
  }
}
