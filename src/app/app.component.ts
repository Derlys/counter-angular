import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  constructor() {
  }
  counter = 0;



  increment(){
    this.counter++;
  }
  decrease(){
    this.counter--;
  }
  reset(){
      this.counter = 0;
  }
}
