import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'calc';
  display: string = "";
  readonly digits = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  readonly symbols = [ '+', '-', '*', '/']
  readonly equalSymbol = "="
  toggle: boolean = true;

  stack: number[] = [];

  ngOnInit() {
    this.display = "0"
  }

  selectedDigit(digit: number) {
    if (!this.toggle) {
      this.toggle = true;
    }
    if (this.display == "0") this.display = ""
    this.display += digit;
  }

  selectedSymbol(symbol: string) {
    if (this.toggle) {
      this.display += " " + symbol + " "
      this.toggle = false
    }
  }

  clear() {
    this.display = "0"
  }

  result() {

  }
}
