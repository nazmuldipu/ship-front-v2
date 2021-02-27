import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { FORM_LABEL_LIST } from 'src/shared/constants/form-labels';
import { PATTERN_MESSAGE, REQUIRED_MESSAGE } from 'src/shared/constants/validation-messages';

@Component({
  selector: 'FValidation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './f-validation.component.html',
  styleUrls: ['./f-validation.component.scss'],
})
export class FValidationComponent implements OnChanges {
  @Input() form: FormGroup | null = null;

  errorMessage: string | null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.errorMessage = this.getFormValidationErrors();
  }

  getFormValidationErrors() {
    let errors = '';
    Object.keys(this.form.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          errors +=
            ' - ' +
            FORM_LABEL_LIST[key] +
            (keyError == 'required'
              ? REQUIRED_MESSAGE
              : keyError == 'pattern'
              ? PATTERN_MESSAGE
              : keyError == 'maxlength'
              ? ' Max Length error'
              : keyError == 'minlength'
              ? ' Minmum Length error'
              : 'Unknown') +
            '; <br/> ';
        });
      }
    });
    return errors;
  }
}
