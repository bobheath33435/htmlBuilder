import { Component } from '@angular/core';
import { Parameter } from './parameter';

@Component({
  selector: 'dataToggleParm',
})
export class DataToggleParm extends Parameter {

  constructor(parameter: string) {
    super("data-toggle", parameter);
  }
}
