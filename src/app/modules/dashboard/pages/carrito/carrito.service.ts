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
    this.carrito.push(vehiculo);
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}