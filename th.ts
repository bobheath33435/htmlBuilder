import { Component } from '@angular/core';
import { Cmd2 } from './cmd2';

@Component({
  selector: 'th',
})
export class Th extends Cmd2 {

  constructor(text: string = undefined) {
    super("th", text);
  }

}
