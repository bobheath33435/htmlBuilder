import { Component } from '@angular/core';
import { Cmd2 } from './cmd2';
import { Tr } from './tr';

@Component({
  selector: 'thead',
})
export class Thead extends Cmd2 {

  private trList: Tr[] = [];

  constructor(text: string = undefined) {
    super("thead", text);
  }

  public addTr(tr: Tr): Thead{
    this.trList.push(tr);
    return this;
  }

  public toString(): string{
    this._text = "";
    for (let tr of this.trList){
      this._text += tr.toString() + "\r";
    }
    return super.toString();
  }
}
