import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  form: any = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    education: '',
    work_experience: '',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  user: User = {};

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   first_name: ['', Validators.required],
    //   last_name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(6),
    //       Validators.maxLength(40),
    //     ],
    //   ],
    //   confirmPassword: ['', Validators.required],
    //   acceptTerms: [false, Validators.requiredTrue],
    // });
  }

  onSubmit(): void {
    const {
      first_name,
      last_name,
      education,
      work_experience,
      email,
      password,
    } = this.form;

    this.authService
      .register(
        first_name,
        last_name,
        education,
        work_experience,
        email,
        password
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }

  // saveUser(): void {
  //   const data = {
  //     id: this.user.id,
  //     email: this.user.email,
  //     first_name: this.user.first_name,
  //     last_name: this.user.last_name,
  //     password: this.user.password,
  //     is_hr: this.user.is_hr,
  //     is_admin: this.user.is_admin,
  //     education: this.user.education,
  //     work_experience: this.user.work_experience,
  //   };

  //   this.userService.create(data).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.submitted = true;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // newUser(): void {
  //   this.submitted = false;
  //   this.user = {
  //     id: null,
  //     email: '',
  //     first_name: '',
  //     last_name: '',
  //     password: '',
  //     is_hr: false,
  //     is_admin: false,
  //     education: '',
  //     work_experience: '',
  //   };
  // }
}
