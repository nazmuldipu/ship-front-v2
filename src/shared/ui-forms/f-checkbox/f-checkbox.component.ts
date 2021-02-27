import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FORM_LABEL_LIST } from 'src/shared/constants/form-labels';

@Component({
  selector: 'FCheckbox',
  templateUrl: './f-checkbox.component.html',
  styleUrls: ['./f-checkbox.component.scss'],
})
export class FCheckboxComponent implements OnInit {
  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() col: boolean = true;

  @Output() onChange = new EventEmitter<any>();

  label: string = null;

  constructor() {}

  ngOnInit() {
    this.label = FORM_LABEL_LIST[this.fieldId]
      ? FORM_LABEL_LIST[this.fieldId]
      : '';
  }

  onValueChange(event) {
    this.onChange.emit(event);
  }
}
