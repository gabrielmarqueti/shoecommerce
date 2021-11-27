import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acics',
  templateUrl: './acics.component.html',
  styleUrls: ['./acics.component.css']
})
export class AcicsComponent implements OnInit {
  products = [
    {
      nome: 'Blocker', imgg: 'assets/acics/blocker.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Cumulus', imgg: 'assets/acics/cumulus.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Equation', imgg: 'assets/acics/equation.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Excite', imgg: 'assets/acics/excite.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Impression', imgg: 'assets/acics/impression.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Kihai', imgg: 'assets/acics/kihai.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Nimbus', imgg: 'assets/acics/pacemaker.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Pacemaker', imgg: 'assets/acics/pacemaker.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Pulse', imgg: 'assets/acics/pulse.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Quantum', imgg: 'assets/acics/quantum.jpg', price: 'R$ 350,00'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
