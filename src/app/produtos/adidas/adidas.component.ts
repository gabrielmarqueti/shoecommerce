import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.css']
})
export class AdidasComponent implements OnInit {
  products = [
    {
      nome: 'Duramo', imgg: 'assets/adidas/duramo.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Pure', imgg: 'assets/adidas/pure.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Race', imgg: 'assets/adidas/race.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Racer', imgg: 'assets/adidas/racer.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Rebold', imgg: 'assets/adidas/rebold.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Run', imgg: 'assets/adidas/run.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Slip', imgg: 'assets/adidas/slip.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Solar', imgg: 'assets/adidas/solar.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Terrax', imgg: 'assets/adidas/terrax.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Tr', imgg: 'assets/adidas/tr.jpg', price: 'R$ 350,00'
    }
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
