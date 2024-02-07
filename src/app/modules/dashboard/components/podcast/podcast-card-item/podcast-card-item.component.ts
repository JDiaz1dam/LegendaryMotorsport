import { Component, Input } from '@angular/core';
import { Vehiculo } from '../../../models/nft';

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
// constructor(){
//   this
// }

}
