import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {


onRestClick() {
  this.cardForm.reset();
}


onSubmit() {

  
}


  cardForm = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
    cardNumber: new FormControl('', [
      
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [
      
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)

    ]),
    securityCode: new FormControl('', [
      
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
    
    
    //name:new FormControl('',[Validators.pattern(/\s/)])
  });

  constructor() {
    
    console.log(this.cardForm.get('name')); // Print properties on object.
  }

}
