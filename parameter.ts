
import { Component } from '@angular/core';

@Component({
  selector: 'parameter',
})
export class Parameter {
  private _attribute: string;
  private _value: string;
  constructor(attribute: string = undefined, value: string = undefined) {
    this._attribute = attribute;
    this._value = value;
  }

  get attribute(): string { return this._attribute; }
  set attribute(attribute: string) { this._attribute = attribute; }
  get value(): string { return this._value; }
  set value(value: string) { this._value = value; }

  public toString(): string{
    let str: string = this._attribute;
    if(this._value != undefined && this._value.length > 0)
      str =  str.concat(`=\"${this._value}\"`);
    return str;
  }
}
