import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit {
  products = [
    {
      nome: 'Downshifter', imgg: 'assets/nike/downshifter.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Excee ', imgg: 'assets/nike/excee.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Giannis', imgg: 'assets/nike/giannis.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Lebron', imgg: 'assets/nike/lebron.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Legacy', imgg: 'assets/nike/legacy.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Legend', imgg: 'assets/nike/legend.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'Revolution', imgg: 'assets/nike/revolution.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Run', imgg: 'assets/nike/run.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Trainer', imgg: 'assets/nike/trainer.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Winflo', imgg: 'assets/nike/winflo.jpg', price: 'R$ 350,00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
