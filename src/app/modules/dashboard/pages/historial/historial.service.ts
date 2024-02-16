import { Injectable } from '@angular/core';
import { Vehiculo } from '../../models/nft';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private historial: Vehiculo[] = [];

  constructor() { }

  getCarrito(): Vehiculo[] {
    return this.historial;
  }

  agregarHistorial(vehiculo: Vehiculo) {
    const vehiculoExistente = this.historial.find(item => item.subtitle === vehiculo.subtitle);

    if (vehiculoExistente) {
        if (vehiculoExistente.cantidad !== undefined) {
            vehiculoExistente.cantidad += 1;
        } else {
            vehiculoExistente.cantidad = 1;
        }
    } else {
        vehiculo.cantidad = 1;
        this.historial.push(vehiculo);
    }
  }

  vaciarHistorial() {
    this.historial = [];
  }

  getHistorial(): Vehiculo[] {
    return this.historial;
  }
}