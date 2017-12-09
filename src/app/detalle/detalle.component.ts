import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.services';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})

export class DetalleComponent {
    title = 'PlatziSquare';
    id = null;
    lugar: any = {};
    constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.queryParams);
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.lugaresService.buscarLugar(this.id);
    }
}
