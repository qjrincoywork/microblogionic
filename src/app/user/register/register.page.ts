import { HttpService } from './../../services/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
    result: Observable<any>;
    responseData: any;
    @Input() errors: any [];
    private registerForm: FormGroup;

    constructor(
        private httpService: HttpService,
        private formBuilder: FormBuilder,
    ) {
        this.registerForm = this.formBuilder.group({
            first_name: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern("/^[a-zA-Z ]*$/")]),
            // first_name: ['', [Validators.required, Validators.maxLength(80), Validators.pattern("/^[a-zA-Z ]*$/")]],
            last_name: ['', [Validators.required, Validators.maxLength(80), Validators.pattern("/^[a-zA-Z ]*$/")]],
            username: ['', [Validators.required, Validators.maxLength(80), Validators.pattern("/^[a-zA-Z ]*$/")]],
            gender: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.pattern("/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{8,20}$/")]],
            confirm_password: ['', [Validators.required, Validators.pattern("/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{8,20}$/")]],
        });
    }

  public errorMessages = {
      first_name: [
          { type: 'required', message: "First name is required."},
          { type: 'pattern', message: "Characters only."},
      ],
      last_name: [
          { type: 'required', message: "Last name is required."},
          { type: 'pattern', message: "Characters only."},
      ],
      username: [
          { type: 'required', message: "Username is required."},
          { type: 'pattern', message: "Characters only."},
      ],
      gender: [
          { type: 'required', message: "Gender is required."}
      ],
      email: [
          { type: 'required', message: "Email is required."}
      ],
      password: [
          { type: 'required', message: "Password is required."},
          { type: 'pattern', message: "The password does not meet the requirements."},
      ],
      confirm_password: [
          { type: 'required', message: "Confirm Password is required."},
          { type: 'pattern', message: "Confirm password does not meet the requirements."},
      ],
  };

  user = {
    first_name: '',
    last_name: '',
    middle_name: '',
    suffix: '',
    username: '',
    email: '',
    gender: '',
    password: '',
    confirm_password: '',
  }

  register() {
    this.httpService.registerUser(this.user).subscribe(res =>
        {
            
            /* if (this.registerForm.valid) {
                this.registerForm.reset();
            } else {
                // this.formErrors = this.FormService.validateForm(this.signUpForm, this.formErrors, false)
            } */
            // console.log(this.registerForm.value);
            // console.log(this.registerForm.valid);
            // console.log(res);
            if (res['errors']) {
                this.errors = res['errors'];
                console.log(this.errors);
                // return errors;
            }
        }
    );
    //   console.log(this.result);
        // console.log(environment.apiUrl + "users/register.json");
  }
}
