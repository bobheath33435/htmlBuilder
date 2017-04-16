import { Component } from '@angular/core';
import { Parameter } from './parameter';

@Component({
  selector: 'titleParm',
})
export class TitleParm extends Parameter {

  constructor(parameter: string) {
    super("title", parameter);
  }
}
