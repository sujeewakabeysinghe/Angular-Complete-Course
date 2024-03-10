import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'gtn-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      formName: [''],
      formNumber: new FormControl(''), //both ways are correct to define
      // formNumber: new FormControl({ value: '2', disabled: true })
      
      // nested form group
      nestedGroup: this.formBuilder.group({
        nestedName: [''],
        nestedNumber: [''],
      }),
    });
  }

  formSubmit() {
    console.log(this.reactiveForm.value)
    // console.log(this.reactiveForm.getRawValue()) // this will give all the values including which are disabled
  }

}
