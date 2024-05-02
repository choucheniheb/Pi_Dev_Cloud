import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private service: JwtService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      usernam: ['', [Validators.required]],
      userlastname: ['', [Validators.required]],
      useremail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      usertelephone: ['', [Validators.required]],
      userdate_birth: ['', [Validators.required]],
      usergenderr: ['', [Validators.required]],
      usernationaliter: ['', [Validators.required]],
    });
  }
  submitForm() {
    this.registerForm.value.rle = 'USER';
    this.registerForm.value.useretat = true;
    console.log(this.registerForm?.value);

    this.service.register(this.registerForm?.value).subscribe((response) => {
      console.log(response);
    });
  }
}
