import { Component, OnInit } from '@angular/core';
import { PodcastCardItemComponent } from '../../components/podcast/podcast-card-item/podcast-card-item.component';
import { NgFor } from '@angular/common';
import { PodcastPlayerComponent } from '../../components/podcast/podcast-player/podcast-player.component';
import { PodcastCardBannerComponent } from '../../components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastHeaderComponent } from '../../components/podcast/podcast-header/podcast-header.component';
import { MainBannerComponent } from '../../components/main/main-banner/main-banner.component';
import { Vehiculo } from '../../models/nft';
import { CarritoService } from './carrito.service';


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
  cantidad: number = 1;

  constructor(private carritoService: CarritoService) { }

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
}