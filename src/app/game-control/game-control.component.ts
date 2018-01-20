import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public interval;
  public lastNumber = 0;
  @Output() numberCreated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval( () =>  {
      this.numberCreated.emit(this.lastNumber + 1);
      this.lastNumber ++;
    }, 1000)

  }

  stopGame() {
    clearInterval(this.interval);
  }

}
