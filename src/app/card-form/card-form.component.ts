import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {


  cardForm = new FormGroup({

    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(5)])
    //name:new FormControl('',[Validators.pattern(/\s/)])
  });

  constructor() {
    
    console.log(this.cardForm.get('name')); // Print properties on object.
  }

}
