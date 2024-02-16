import { Component, OnInit } from '@angular/core';
import { PodcastCardItemComponent } from '../../components/podcast/podcast-card-item/podcast-card-item.component';
import { NgFor } from '@angular/common';
import { PodcastPlayerComponent } from '../../components/podcast/podcast-player/podcast-player.component';
import { PodcastCardBannerComponent } from '../../components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastHeaderComponent } from '../../components/podcast/podcast-header/podcast-header.component';
import { MainBannerComponent } from '../../components/main/main-banner/main-banner.component';
import { Vehiculo } from '../../models/nft';
import { CarritoService } from './carrito.service';
import { HistorialService } from '../historial/historial.service';


@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    standalone: true,
    imports: [
        PodcastHeaderComponent,
        PodcastCardBannerComponent,
        PodcastPlayerComponent,
        NgFor,
        PodcastCardItemComponent,
        MainBannerComponent
    ],
})
export class CarritoComponent  implements OnInit{
  carrito: Vehiculo[] = [];
  constructor(private carritoService: CarritoService, private historialService: HistorialService) { }

  ngOnInit(): void {
    this.carrito = this.carritoService.getCarrito();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.carrito = [];
  }

  calcularPrecioTotal(): number {
    return this.carritoService.calcularPrecioTotal();
  }

  restarCantidad(vehiculo: Vehiculo) {
    const index = this.carrito.findIndex(v => v === vehiculo);
    if (index !== -1 && vehiculo.cantidad && vehiculo.cantidad > 0) {
        vehiculo.cantidad--;
        // Verifica si el título está definido
        if (vehiculo.subtitle !== undefined) {
            // Si la cantidad llega a 0, eliminar el vehículo del carrito
            if (vehiculo.cantidad === 0) {
                // Elimina el vehículo del carrito
                this.carrito.splice(index, 1);
            }
        }
    }
  }

  sumarCantidad(vehiculo: Vehiculo) {
      const index = this.carrito.findIndex(v => v === vehiculo);
      if (index !== -1) {
          if (!vehiculo.cantidad) {
              vehiculo.cantidad = 1;
          } else {
              vehiculo.cantidad++;
          }
      }
  }

  mandarHistorial() {
    this.carrito.forEach(vehiculo => {
      this.historialService.agregarHistorial(vehiculo);
    });
    this.carritoService.vaciarCarrito();
    this.carrito = [];
    var mensaje = document.createElement("div");
          mensaje.textContent = "Compra realizada";
          mensaje.style.position = "fixed";
          mensaje.style.top = "50%";
          mensaje.style.left = "50%";
          mensaje.style.transform = "translate(-50%, -50%)";
          mensaje.style.backgroundColor = "#111";
          mensaje.style.color = "#fff";
          mensaje.style.padding = "10px 20px";
          mensaje.style.borderRadius = "5px";
          mensaje.style.zIndex = "9999";
          document.body.appendChild(mensaje);
          
          setTimeout(function() {
              // Ocultar el mensaje después de 2 segundos
              mensaje.style.display = "none";
          }, 1500); // 2000 milisegundos = 2 segundos
  }
}