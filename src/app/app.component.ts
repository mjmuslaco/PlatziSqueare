import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';

  lugares: any = [
    { plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Florería la nevada' },
    { plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'Donas la Pasadita' },
    { plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Veterinaria los Angeles' },
    { plan: 'pagado', cercania: 3, distancia: 4, active: false, nombre: 'Hotel del prado' },
    { plan: 'gratuito', cercania: 1, distancia: 2, active: true, nombre: 'Almacenes Exito' },
  ];

  lat: number = 4.6560663;
  lng: number = -74.0595918;
}
