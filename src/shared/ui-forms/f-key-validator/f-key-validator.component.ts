import { Component, Input, OnChanges } from '@angular/core';
import { REQUIRED_MESSAGE } from 'src/shared/constants/validation-messages';
import { PATTERNS_LIST } from 'src/shared/constants/validation-patterns';

@Component({
  selector: 'FKeyValidator',
  templateUrl: './f-key-validator.component.html',
  styleUrls: ['./f-key-validator.component.scss'],
})
export class FKeyValidatorComponent implements OnChanges {
  @Input() validationErrors: object | null = null;
  @Input() name: string = '';

  errorMessage: string | null = null;

  ngOnChanges(): void {
    this.errorMessage = this.getErrorMessage();
  }

  getErrorMessage(): string | null {
    const errors = this.validationErrors;
    if (errors) {
      return errors['required']
        ? this.name +
            REQUIRED_MESSAGE /** <----------- Data should be filled     */
        : errors['pattern']
        ? this.getPatternMessage(
            errors['pattern']['requiredPattern']
          ) /** <----------- Data should match pattern */
        : errors['minlength']
        ? this.name +  ' should contain atleast ' + errors['minlength']['requiredLength'] + ' characters'
        : null; /** <----------- Data is filled correctly  */
    }
    return null;
  }

  /**
   * Method 'getPatternMessage' finds proper pattern message form patterns list
   * and returns the message.
   */
  getPatternMessage(requiredPattern: string): string {
    return PATTERNS_LIST.filter((x) => x['PATTERN'] === requiredPattern)[0][
      'MESSAGE'
    ];
  }
}
