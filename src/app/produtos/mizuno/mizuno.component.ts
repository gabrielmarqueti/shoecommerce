import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mizuno',
  templateUrl: './mizuno.component.html',
  styleUrls: ['./mizuno.component.css']
})
export class MizunoComponent implements OnInit {
  products = [
    {
      nome: 'Brave', imgg: 'assets/mizuno/brave.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Dynasty', imgg: 'assets/mizuno/dynasty.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Falcon', imgg: 'assets/mizuno/falcon.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Mirai', imgg: 'assets/mizuno/mirai.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Optimus', imgg: 'assets/mizuno/optimus.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Prophecy X', imgg: 'assets/mizuno/prophecyx.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Sorayama', imgg: 'assets/mizuno/sorayama.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Space', imgg: 'assets/mizuno/space.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Wave Creation', imgg: 'assets/mizuno/wavecreation.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Way', imgg: 'assets/mizuno/way.jpg', price: 'R$ 350,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
