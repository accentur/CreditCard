import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {


  @Input() control: FormControl | any;
  @Input() label: string = "";
  
  showErrors() {
    
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;


  }

  showMessageError(input:string) {
    
    return this.control.errors?.[input];

  }


}
