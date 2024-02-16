import { Injectable } from '@angular/core';
import { Vehiculo } from '../../models/nft';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Vehiculo[] = [];

  constructor() { }

  getCarrito(): Vehiculo[] {
    return this.carrito;
  }

  agregarAlCarrito(vehiculo: Vehiculo) {
    const vehiculoExistente = this.carrito.find(item => item.subtitle === vehiculo.subtitle);

    if (vehiculoExistente) {
        if (vehiculoExistente.cantidad !== undefined) {
            vehiculoExistente.cantidad += 1;
        } else {
            vehiculoExistente.cantidad = 1;
        }
    } else {
        vehiculo.cantidad = 1;
        this.carrito.push(vehiculo);
    }
  }

  vaciarCarrito() {
    this.carrito = [];
  }

  calcularPrecioTotal(): number {
    let total = 0;
    this.carrito.forEach(vehiculo => {
      if (vehiculo && vehiculo.price !== undefined && vehiculo.cantidad !== undefined) {
        total += vehiculo.price * vehiculo.cantidad;
      }
    });
    return total;
}

}
