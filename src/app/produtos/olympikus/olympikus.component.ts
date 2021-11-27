import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olympikus',
  templateUrl: './olympikus.component.html',
  styleUrls: ['./olympikus.component.css']
})
export class OlympikusComponent implements OnInit {
  products = [
    {
      nome: 'Asas', imgg: 'assets/olympikus/asas.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Atract', imgg: 'assets/olympikus/atract.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Cristal', imgg: 'assets/olympikus/cristal.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Dynamic', imgg: 'assets/olympikus/dynamic.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Energy', imgg: 'assets/olympikus/energy.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Flex', imgg: 'assets/olympikus/flex.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'React', imgg: 'assets/olympikus/react.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Start', imgg: 'assets/olympikus/start.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Ultra Leve', imgg: 'assets/olympikus/ultraleve.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Venus', imgg: 'assets/olympikus/venus.jpg', price: 'R$ 350,00'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
