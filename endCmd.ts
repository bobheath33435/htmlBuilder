import { Component } from '@angular/core';

@Component({
  selector: 'endCmd',
})
export class EndCmd {
  private _command: string;

  constructor(command: string = undefined) {
    this._command = command;
  }

  public toString(): string{
    return `</${this._command}>`;
  }
}
