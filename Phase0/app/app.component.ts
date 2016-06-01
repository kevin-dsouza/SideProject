import { Component } from '@angular/core';
import { FormBuilder , Validators, ControlGroup,AbstractControl} from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: 'app/contact-form.component.html'
})
export class AppComponent { 
  form: ControlGroup;
  email: AbstractControl;
  constructor(private _fb : FormBuilder){
     this.form = this._fb.group ({
      
      'email' : ['', Validators.required]
      
    });
    
  }
  
  ngOnInit() {
    
   
    
  }
  
  
  
}