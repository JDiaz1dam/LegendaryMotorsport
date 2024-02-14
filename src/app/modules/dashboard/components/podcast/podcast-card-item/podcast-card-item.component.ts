import { Component, Input } from '@angular/core';
import { Vehiculo } from '../../../models/nft';
import { CarritoService } from '../../../pages/carrito/carrito.service';

@Component({
    selector: 'app-podcast-card-item',
    templateUrl: './podcast-card-item.component.html',
    standalone: true,
})
export class PodcastCardItemComponent {

  // @Input() title: string = '';
  // @Input() subtitle: string = '';
  // @Input() image: string = '';
  // @Input() price: number = 0;

@Input() vehiculo:Vehiculo ={};
constructor(private carritoService: CarritoService) {}

  seleccionarCoche(coche: Vehiculo): void {
    this.carritoService.agregarAlCarrito(coche);
  console.log(coche);
  var mensaje = document.createElement("div");
        mensaje.textContent = "Vehiculo añadido al carrito";
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
