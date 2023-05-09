import { Component } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
counter:number = 0;
onPlusClick(){
  this.counter++
}

onMinusClick(){
  this.counter--
}
}
