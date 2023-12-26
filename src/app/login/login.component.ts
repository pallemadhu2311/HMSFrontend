import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  isUserLoggedIn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthserviceService,
    private route: Router,
    private signupserv: SignUpService

  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        if (response.includes('Login Successful')) {
          // Fetch user profile after successful login
          this.signupserv.getUserProfile(username).subscribe(

            (data) => {
              // console.log('User profile:', data);
              // Store user profile in local storage or wherever needed
              localStorage.setItem(
                'userProfile',
                JSON.stringify(data)
              );
              this.isUserLoggedIn = true;
              //console.log('IsUseLoggedIn : ', this.isUserLoggedIn);

              if (data.usertype === 'Hostel Owner') {
                this.route.navigate(['hostel/home']);
              }
              else if (data.usertype === 'Regular User') {
                this.route.navigate(['regular/home'])
              }
              else {
                alert("Invalid User");
              }

              // Handle success, e.g., redirect to another page
            
            },
            (profileError) => {
              console.error('Error fetching user profile:', profileError);
            }
          );
        } else {
          console.error(
            'Login failed Because of Invalid Authorization:',
            response
          );
          alert('Invalid Credentials. Please Try again');
        }
      },
      (error) => {
        console.error('Login failed Because of Invalid Authorization:', error);
        alert('Invalid Credentials. Please Try again');
      }
    );
  }
}
