import { Component } from '@angular/core';
import { Cmd2 } from './cmd2';
import { Tbody } from './tbody';
import { Thead } from './thead';

@Component({
  selector: 'table',
})
export class Table extends Cmd2 {

  constructor(thead: Thead, tbody: Tbody) {
    super("table", thead.toString() + tbody.toString());
  }
}
