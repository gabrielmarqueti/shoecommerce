import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puma',
  templateUrl: './puma.component.html',
  styleUrls: ['./puma.component.css']
})
export class PumaComponent implements OnInit {
  products = [
    {
      nome: 'BDP Runner', imgg: 'assets/puma/bdprunner.jpg', price: 'R$ 799,89'

    },
    {
      nome: 'Cell Surin', imgg: 'assets/puma/cellsurin.jpg', price: 'R$ 599,99'
    },
    {
      nome: 'Comet', imgg: 'assets/puma/comet.jpg', price: 'R$ 353,00'
    },
    {
      nome: 'Electron', imgg: 'assets/puma/electron.jpg', price: 'R$ 557,60'
    },
    {
      nome: 'Flyer', imgg: 'assets/puma/flyer.jpg', price: 'R$ 355,00'
    },
    {
      nome: 'Prowl', imgg: 'assets/puma/prowl.jpg', price: 'R$ 152,00'
    },
    {
      nome: 'R78', imgg: 'assets/puma/r78.jpg', price: 'R$ 854,00'
    },
    {
      nome: 'Smash', imgg: 'assets/puma/smash.jpg', price: 'R$ 297,00'
    },
    {
      nome: 'Surin', imgg: 'assets/puma/surin.jpg', price: 'R$ 154,99'
    },
    {
      nome: 'Wired', imgg: 'assets/puma/wired.jpg', price: 'R$ 350,00'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
