import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oakley',
  templateUrl: './oakley.component.html',
  styleUrls: ['./oakley.component.css']
})
export class OakleyComponent implements OnInit {
  products = [
    {
      nome: 'Barrel', imgg: 'assets/oakley/barrel.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Culture', imgg: 'assets/oakley/culture.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Flak', imgg: 'assets/oakley/flak.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Flyer', imgg: 'assets/oakley/flyer.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Halftrack', imgg: 'assets/oakley/halftrack.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Hardshell', imgg: 'assets/oakley/hardshell.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Rudder', imgg: 'assets/oakley/rudder.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Stratus', imgg: 'assets/oakley/stratus.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Tuner', imgg: 'assets/oakley/tuner.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Voyage', imgg: 'assets/oakley/voyage.jpg', price: 'R$ 350,00'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
