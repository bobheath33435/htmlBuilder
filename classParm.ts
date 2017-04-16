import { Component } from '@angular/core';
import { Parameter } from './parameter';

@Component({
  selector: 'classParm',
})
export class ClassParm extends Parameter {

  constructor(parameter: string) {
    super("class", parameter);
  }
}
