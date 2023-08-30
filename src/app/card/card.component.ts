import { Component, Input } from '@angular/core';
import { Card } from '../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() content: Card = {
    title: '',
    caption: '',
    imgUrl: '',
    textoBoton: '',
  };
}
