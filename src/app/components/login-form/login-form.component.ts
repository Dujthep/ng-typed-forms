import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form = new FormGroup<LoginForm>({
    email: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
    firstName: new FormControl<string>('', { nonNullable: true }),
    lastName: new FormControl<string>('', { nonNullable: true }),
    age: new FormControl<number | null>(null, { nonNullable: false, validators: [Validators.min(0), isNumberValidator()] }),
  });

  constructor() {}

  ngOnInit(): void {}

  onReset(): void {
    this.form.reset();
  }
}

export interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  age?: FormControl<number | null>;
}

export function isNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isNumber = Number.isInteger(+control.value);
    return isNumber ? null:  {isNotNumber: {value: control.value}};
  };
}