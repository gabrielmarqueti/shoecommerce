import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-armour',
  templateUrl: './under-armour.component.html',
  styleUrls: ['./under-armour.component.css']
})
export class UnderArmourComponent implements OnInit {
  products = [
    {
      nome: 'Bandit', imgg: 'assets/under-armour/bandit.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Celery', imgg: 'assets/under-armour/celerity.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Charged', imgg: 'assets/under-armour/charged.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Hovr', imgg: 'assets/under-armour/hovr.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Mind', imgg: 'assets/under-armour/mind.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Navy', imgg: 'assets/under-armour/navy.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Prospect', imgg: 'assets/under-armour/prospect.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Pulse', imgg: 'assets/under-armour/pulse.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Quest', imgg: 'assets/under-armour/quest.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Summit', imgg: 'assets/under-armour/summit.jpg', price: 'R$ 350,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
