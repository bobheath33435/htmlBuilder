import { Component } from '@angular/core';
import { Cmd2 } from './cmd2';
import { Td } from './td';
import { Th } from './th';

@Component({
  selector: 'tr',
})
export class Tr extends Cmd2 {

  private tdThList: Cmd2[] = [];

  constructor(text: string = undefined) {
    super("tr");
  }

  public addTd(td: Td): Cmd2{
    this.tdThList.push(td);
    return this;
  }

  public toString(): string{
    this._text = "";
    for (let td of this.tdThList){
      this._text += td.toString();
    }
    return super.toString();
  }
}
