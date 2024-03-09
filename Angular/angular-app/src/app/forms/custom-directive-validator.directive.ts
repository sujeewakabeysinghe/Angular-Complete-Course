import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[gtnCustomDirectiveValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomDirectiveValidatorDirective, multi: true}], // grab this from Validator Documentation  
})
export class CustomDirectiveValidatorDirective implements Validator { //manually implemented this Validator

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if(value.includes('test')) {
      return { invalidEmail: true }
    }
    return null;
  }

}
