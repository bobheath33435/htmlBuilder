import { Component } from '@angular/core';
import { Cmd2 } from './cmd2';

@Component({
  selector: 'button',
})
export class Button extends Cmd2 {

  constructor(text: string = undefined) {
    super("button", text);
  }
}
