import { Component, OnInit } from '@angular/core';
import { Perro } from '../perro';
import { APBT } from '../mock-perros';
@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
   perros = APBT;
    perro: Perro = {
      id: 1,
      name: 'Onix'
    };

  constructor() { }

  ngOnInit() {
  }

}
