import { Component, OnInit } from '@angular/core';
import { PodcastCardItemComponent } from '../../components/podcast/podcast-card-item/podcast-card-item.component';
import { NgFor } from '@angular/common';
import { PodcastPlayerComponent } from '../../components/podcast/podcast-player/podcast-player.component';
import { PodcastCardBannerComponent } from '../../components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastHeaderComponent } from '../../components/podcast/podcast-header/podcast-header.component';
import { MainBannerComponent } from '../../components/main/main-banner/main-banner.component';
import { Vehiculo } from '../../models/nft';

@Component({
    selector: 'app-tienda',
    templateUrl: './tienda.component.html',
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
export class TiendaComponent  implements OnInit{

  public vehiculos:Vehiculo[] = [
    { title: "Aston Martin", subtitle: "Aston Martin Valkyrie", price: 1, image: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/Aston_Martin_Valkyrie.jpg?tf=3840x" },
    { title: "Audi", subtitle: "Audi R8", price: 1, image: "https://uploads.audi-mediacenter.com/system/production/media/70272/images/3c92d2acbf6ab5f85be8006f854786f0f0ff36be/A1813681_web_2880.jpg?1698341967" },
    { title: "BMW", subtitle: "BMW i8", price: 1, image: "https://images.prismic.io/carwow/a0b44e58-baa3-4f23-b707-b427ba52157e_P90285389_highRes_the-new-bmw-i8-coupe+%281%29.jpg" },
    { title: "Bugatti", subtitle: "Bugatti Ciento Dieci", price: 1, image: "https://mediadatabase.cdn.bugatti-newsroom.com/d/4ziw3Wcz/" },
    { title: "Bugatti", subtitle: "Bugatti Divo", price: 1, image: "https://img.remediosdigitales.com/df3e9c/bugatti-divo-1/450_1000.jpg" },
    { title: "Lamborghini", subtitle: "Lamborghini Huracán", price: 1, image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/tecnica/2023/11_06_refresh/s/ext_mob.jpg" },
    { title: "Lamborghini", subtitle: "Lamborghini Veneno", price: 1, image: "https://www.bosshunting.com.au/cdn-cgi/imagedelivery/izM8XxyLg9MD6py1ribxJw/www.bosshunting.com.au/2020/03/screen-shot-2020-01-22-at-20532-pm.png/w=1024,h=767" },
    { title: "Lamborghini", subtitle: "Lamborghini Aventador", price: 1, image: "https://cdn.motor1.com/images/mgl/z2Qg4/s1/4x3/2020-lamborghini-aventador-svj-roadster.webp" },
    { title: "Mclaren", subtitle: "Mclaren P1", price: 1, image: "https://fotografias.larazon.es/clipping/cmsimages01/2022/01/10/D753BE31-C96C-422F-85EE-06A8CBDF1389/98.jpg?crop=887,499,x0,y0&width=1900&height=1069&optimize=low&format=webply" },
    { title: "Mclaren", subtitle: "Mclaren Senna", price: 1, image: "https://noticias.coches.com/wp-content/uploads/2017/12/McLaren-Senna-Victory-Grey-16.jpg" },
    { title: "Mustang", subtitle: "Ford Mustang GT", price: 1, image: "https://media.gq.com.mx/photos/63cc47fe3a892f6e0ec583fd/master/pass/JV0A9844-1.jpg" },
    { title: "Pagani", subtitle: "Pagani Huarya", price: 1, image: "https://megaricos.com/wp-content/uploads/2019/05/carro-Pagani-Huayra-BC-1.jpg" },
    { title: "Porsche", subtitle: "Porsche 911", price: 1, image: "https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2023-07/64a6a21f82800.jpg?itok=rqeKHbs1" },
    { title: "Porsche", subtitle: "Porsche 930", price: 1, image: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2023/03/26/1461238/461339/porsche_930_turbo_1976_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4732845.jpg" },
    { title: "Rolls Royce", subtitle: "Rolls Royce Dawn", price: 1, image: "https://car-images.bauersecure.com/wp-images/12100/rolls-royce-dawn01.jpg" },
  ]

  ngOnInit(): void {
    
    // this.vehiculos 
  }

}
