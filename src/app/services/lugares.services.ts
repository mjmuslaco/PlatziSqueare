import { Injectable } from "@angular/core";
@Injectable()
export class LugaresService {
    lugares: any = [
        { id: 1, plan: 'gratuito', cercania: 1, distancia: 1.8, active: false, nombre: 'Florería la nevada' },
        { id: 2, plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'Donas la Pasadita' },
        { id: 3, plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Veterinaria los Angeles' },
        { id: 4, plan: 'pagado', cercania: 3, distancia: 4, active: false, nombre: 'Hotel del prado' },
        { id: 5, plan: 'gratuito', cercania: 1, distancia: 2, active: true, nombre: 'Almacenes Exito' },
        { id: 6, plan: 'gratuito', cercania: 1, distancia: 2, active: true, nombre: 'Almacenes Exito' },
    ];

    public getLugares() {
        return this.lugares;
    }

    public buscarLugar(id) {
        return this.lugares.find((lugar) => {
            return lugar.id === id;
        }) || null;
    }
}