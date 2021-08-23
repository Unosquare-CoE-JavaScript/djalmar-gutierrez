import { Component, OnInit } from '@angular/core';

const client ={
  id: '1',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Acme, '
}

const tango = [];

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
