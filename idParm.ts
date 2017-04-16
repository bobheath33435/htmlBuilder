import { Component } from '@angular/core';
import { Parameter } from './parameter';

@Component({
  selector: 'idParm',
})
export class IdParm extends Parameter {

  constructor(parameter: string) {
    super("id", parameter);
  }
}
