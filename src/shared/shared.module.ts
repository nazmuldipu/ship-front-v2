import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { FInputComponent } from './ui-forms/f-input/f-input.component';
import { FKeyValidatorComponent } from './ui-forms/f-key-validator/f-key-validator.component';
import { FValidationComponent } from './ui-forms/f-validation/f-validation.component';
import { FCheckboxComponent } from './ui-forms/f-checkbox/f-checkbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FInputComponent,
    FValidationComponent,
    FKeyValidatorComponent,
    LoadingComponent,
    FCheckboxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FCheckboxComponent,
    FInputComponent,
    FValidationComponent,
    LoadingComponent,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
