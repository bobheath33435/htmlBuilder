import { Component } from '@angular/core';
import { Parameter } from './parameter';
import { Cmd } from './cmd';
import { EndCmd } from './endCmd';
import { ClassParm } from './classParm';
import { IdParm } from './idParm';
import { TitleParm } from './titleParm';
import { DataToggleParm } from './dataToggleParm';
import { TypeXParm } from './typeParm';

@Component({
  selector: 'cmd2',
})
export class Cmd2 extends Cmd {
  protected _text: string;
  private end: EndCmd;

  constructor(command: string, text: string = "") {
    super(command);
    this._text = text;
    this.end = new EndCmd(command);
  }

  protected addParameter(parm: Parameter): Cmd2{
    this._parms.push(parm);
    return this;
  }

  public setClass(text: string): Cmd2{
    return this.addParameter(new ClassParm(text));
  }

  public setTitle(text: string): Cmd2{
    return this.addParameter(new TitleParm(text));
  }
  public setDataToggle(text: string): Cmd2{
    return this.addParameter(new DataToggleParm(text));
  }

  public setId(text: string): Cmd2{
    return this.addParameter(new IdParm(text));
  }

  public setType(text: string): Cmd2{
    return this.addParameter(new TypeXParm(text));
  }

  public toString(): string{
    return super.toString() + this._text + this.end.toString();
  }

}
