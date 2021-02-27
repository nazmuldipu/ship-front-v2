import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FORM_LABEL_LIST } from './../../constants/form-labels';

@Component({
  selector: 'FInput',
  templateUrl: './f-input.component.html',
  styleUrls: ['./f-input.component.scss']
})
export class FInputComponent implements OnInit, DoCheck {
  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() type: string = 'text';
  @Input() maxlength: number = null;
  @Input() readonly: boolean = false;
  @Input() col: boolean = true;
  @Input() showLabel:boolean = true;

  @Output() onChange = new EventEmitter<any>();
  
  label: string = null;
  validator;
  validationErrors: object = null;

  constructor() { }

  ngOnInit() {
    this.label = FORM_LABEL_LIST[this.fieldId] ? FORM_LABEL_LIST[this.fieldId] : '';
  }

  ngDoCheck() {
    if (this.control['validator'])
      this.validator = this.control.validator({} as AbstractControl);

    this.validationErrors =
      this.control.touched && this.control.invalid
        ? this.control['errors']
        : null;
  }

  onValueChange(event) {
    this.onChange.emit(event);
  }

}
