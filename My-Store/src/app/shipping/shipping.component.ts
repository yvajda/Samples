import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) {
    this.shippingCosts = cartService.getShippingPrices();
  }

}

