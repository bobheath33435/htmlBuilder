import { Component } from '@angular/core';
import { Parameter } from './parameter';

@Component({
  selector: 'cmd',
})
export class Cmd {
  protected _command: string;
  protected _parms: Array<Parameter> = [];

  constructor(command: string) {
    this._command = command;
  }

  protected addParameter(parm: Parameter): Cmd{
    this._parms.push(parm);
    return this;
  }

  public toString(): string{
    let str: string = `<${this._command}`;
    for (let parm of this._parms){
      str += ' ' + parm;
    }
    str += '>';
    return str;
  }
}
