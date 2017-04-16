import { Component } from '@angular/core';
import { Parameter } from './parameter';

@Component({
  selector: 'typeXParm',
})
export class TypeXParm extends Parameter {

  constructor(parameter: string) {
    super("type", parameter);
  }
}
