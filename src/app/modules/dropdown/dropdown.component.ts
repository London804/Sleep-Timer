import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DURATION_INCREMENTS, Duration } from '../../shared/constants/duration';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

    @Input() config: any;
    @Input() data: Array<Duration>
    @Output() formValues = new EventEmitter();

    myForm: FormGroup;

    constructor() { }

    ngOnInit(): void {

        this.myForm = this.config.formGroup = new FormGroup({});
        this.myForm.addControl(this.config.formControl, new FormControl(0));
        
    }

    getFormValue() {
        this.formValues.emit(this.myForm.value);
    }

}
