import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: '**', redirectTo: 'error/404' },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
