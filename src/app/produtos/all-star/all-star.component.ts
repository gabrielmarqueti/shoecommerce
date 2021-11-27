import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-star',
  templateUrl: './all-star.component.html',
  styleUrls: ['./all-star.component.css']
})
export class AllStarComponent implements OnInit {
  products = [
    {
      nome: 'Border', imgg: 'assets/all-star/border.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Chuktaylor', imgg: 'assets/all-star/chucktaylor.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Converse', imgg: 'assets/all-star/converse.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Core', imgg: 'assets/all-star/core.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'CT Converse', imgg: 'assets/all-star/ctconversejpg.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Kapell', imgg: 'assets/all-star/kapell.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Mid', imgg: 'assets/all-star/mid.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Mule', imgg: 'assets/all-star/mule.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'OLD Star', imgg: 'assets/all-star/oldstar.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Star Hike', imgg: 'assets/all-star/starhike.jpg', price: 'R$ 350,00'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
