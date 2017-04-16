import { Component } from '@angular/core';
import { Cmd2 } from './cmd2';

@Component({
  selector: 'td',
})
export class Td extends Cmd2 {

  constructor(text: string = undefined) {
    super("td", text);
  }
}
