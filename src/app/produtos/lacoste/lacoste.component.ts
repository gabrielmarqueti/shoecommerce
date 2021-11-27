import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lacoste',
  templateUrl: './lacoste.component.html',
  styleUrls: ['./lacoste.component.css']
})
export class LacosteComponent implements OnInit {
  products = [
    {
      nome: 'Courtine', imgg: 'assets/lacoste/courtine.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Europa', imgg: 'assets/lacoste/europa.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Graduate', imgg: 'assets/lacoste/graduate.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Gripshot', imgg: 'assets/lacoste/gripshot.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Lerond', imgg: 'assets/lacoste/lerond.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'LT Fit', imgg: 'assets/lacoste/ltfit.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Piqueé', imgg: 'assets/lacoste/piquee.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Scale', imgg: 'assets/lacoste/scale.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Sport', imgg: 'assets/lacoste/sport.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Sportwear', imgg: 'assets/lacoste/sportwear.jpg', price: 'R$ 350,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
