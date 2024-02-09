import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';

@Component({
    selector: 'app-carrito-menu',
    templateUrl: './carrito-menu.component.html',
    styleUrls: ['./carrito-menu.component.scss'],
    standalone: true,
    imports: [
        ClickOutsideDirective,
        NgClass,
        RouterLink,
    ],
})
export class CarritoMenuComponent implements OnInit {
  public isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
