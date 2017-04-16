import { Component } from '@angular/core';
import { Cmd2 } from './cmd2';
import { Tr } from './tr';

@Component({
  selector: 'tbody',
})
export class Tbody extends Cmd2 {

  protected trList: Tr[] = [];

  constructor(text: string = undefined) {
    super("tbody", text);
  }

  public addTr(tr: Tr): Cmd2{
    this.trList.push(tr);
    return this;
  }

  public rowsString(): string{
    let data: string = "";
    for (let tr of this.trList){
      data += tr.toString() + "\r";
    }
    return data;
  }

  public toString(): string{
    this._text = this.rowsString();
    return super.toString();
  }
}
