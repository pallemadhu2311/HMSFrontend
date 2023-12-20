import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm !: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService, private route:Router) {


  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    // Check if username or password is empty
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    this.authService.login(username, password).subscribe(
        (response) => {
            console.log('Login successful:', response);
            // Check if the response contains "Login Successful"
            if (response.includes("Login Successful")) {
                // Handle success, e.g., redirect to another page
                this.route.navigate(['hostel/home']);
            } else {
                console.error('Login failed:', response);
                // Handle unexpected response
                alert("Login Failed");
            }
        },
        (error) => {
            console.error('Login failed:', error);
            // Handle error, e.g., display an error message
            alert("Login Failed. Please try again.");
        }
    );
}


}






