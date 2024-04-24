import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup | undefined ;
  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ){} 

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]],
    })

  }
  submitForm()
  {
  if (this.loginForm?.valid) {
      const loginData = this.loginForm.value;
      console.log(loginData);
      this.service.login(loginData).subscribe(
        response => {
          console.log('Login successful:', response); 
          const jwToken = response.jwtToken;
          localStorage.setItem('jwt',jwToken);
        },
        error => {
          console.error('Login failed:', error); // Log error response for debugging
        }
      );
      
      
      this.router.navigateByUrl("/");
    } else {
      console.error('Invalid form data'); // Log form validation errors
    }
  }

  }


