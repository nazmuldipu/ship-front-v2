import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'base-form',
  template:'t'
})
export class BaseFormComponent implements OnChanges {
  @Input() errorMessage: string;
  @Output() create = new EventEmitter<any>();

  form: FormGroup;
  mouseoverShifting = false;

  ngOnChanges(changes: SimpleChanges): void {}

  submit() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }
}
