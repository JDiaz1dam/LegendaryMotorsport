import { Component, OnInit } from '@angular/core';
import { Nft, Vehiculo } from '../../models/nft';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';
import { HistorialService } from './historial.service';
import { PodcastHeaderComponent } from '../../components/podcast/podcast-header/podcast-header.component';
import { PodcastCardBannerComponent } from '../../components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastPlayerComponent } from '../../components/podcast/podcast-player/podcast-player.component';
import { NgFor } from '@angular/common';
import { PodcastCardItemComponent } from '../../components/podcast/podcast-card-item/podcast-card-item.component';
import { MainBannerComponent } from '../../components/main/main-banner/main-banner.component';

@Component({
    selector: 'app-historial',
    templateUrl: './historial.component.html',
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
export class HistorialComponent implements OnInit {
  historial: Vehiculo[] = [];

  constructor(private historialService: HistorialService) {}

  ngOnInit(): void {
    this.actualizarHistorial();
  }

  actualizarHistorial() {
    this.historial = this.historialService.getHistorial();
  }

  vaciarHistorial() {
    this.historialService.vaciarHistorial();
    this.actualizarHistorial();
  }
}
