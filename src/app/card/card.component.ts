import { Component,Input } from '@angular/core';
interface description{
  name:string;
  isDisabled:boolean;
}

interface content{
  plan:string;
  price:number;
  desc:Array<description>;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() content: content | undefined;
  /* @Input() desc: description | undefined; */
}