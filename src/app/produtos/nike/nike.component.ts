import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit {
  products = [
    {
      nome: 'downshifter', imgg: 'assets/nike/downshifter.jpg', price: '120'

    },
    {
      nome: 'excee ', imgg: 'assets/nike/excee.jpg', price: 'R$ 350,00'
    },
    {
      nome: 'giannis', imgg: 'assets/nike', price: ''
    },
    {
      nome: 'lebron', imgg: 'assets/nike', price: ''
    },
    {
      nome: '', imgg: 'assets/nike', price: ''
    },
    {
      nome: '', imgg: 'assets/nike', price: ''
    },
    {
      nome: '', imgg: 'assets/nike', price: ''
    },
    {
      nome: '', imgg: 'assets/nike', price: ''
    },
    {
      nome: '', imgg: 'assets/nike', price: ''
    },
    {
      nome: '', imgg: 'assets/nike', price: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
