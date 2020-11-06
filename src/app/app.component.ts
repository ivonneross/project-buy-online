import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-buy-online';

  objeto = {};

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 30000,
      description: 'camisetas en algodon'
    },
    {
      id: '2',
      image: 'assets/images/vestidos.png',
      title: 'Vestido',
      price: 80000,
      description: 'vesido de gala'
    },
    {
      id: '3',
      image: 'assets/images/gafas.png',
      title: 'Gafas',
      price: 50000,
      description: 'Gafas de marca'
    },
    {
      id: '4',
      image: 'assets/images/zapatos.png',
      title: 'Zapatos',
      price: 100000,
      description: 'Zapatos elegantes'
    },
    {
      id: '5',
      image: 'assets/images/falda.png',
      title: 'Falda',
      price: 40000,
      description: 'Falda de moda'
    },
    {
      id: '6',
      image: 'assets/images/abrigo.png',
      title: 'Abrigo',
      price: 90000,
      description: 'Abrigo para invierno'
    },
  ];

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
