import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PHONE_NUMBER_PATTERN } from 'src/shared/constants/validation-patterns';
import { BaseFormComponent } from 'src/shared/ui-forms/base-form';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent extends BaseFormComponent {
  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: [
        '01912239643',
        [Validators.required, Validators.pattern(PHONE_NUMBER_PATTERN)],
      ],
      password: ['shipHotelswave', [Validators.required, Validators.minLength(6)]],
    });
  }
}
