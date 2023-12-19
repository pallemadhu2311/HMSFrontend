import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../service/sign-up.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpForm!: FormGroup;
  userData=[];

  constructor(private fb:FormBuilder, private signUpServ:SignUpService, private router:Router){

  }

  ngOnInit():void{
    this.signUpForm = this.fb.group({
      username : ['',Validators.required],
      fullname:['',Validators.required],
      email:['',[Validators.email, Validators.required]],
      phone:['',[Validators.required,Validators.maxLength(10)]],
      usertype:['',Validators.required],
      password:['',Validators.required],
      createdDate: ['']
    });

    this.signUpForm.get('createdDate')?.setValue(new Date().toISOString());
  }

  onSignUp(){
    if(this.signUpForm.valid){
      const formData = this.signUpForm.value;

      this.signUpServ.registerUser(formData).subscribe((response:any)=>{
        this.userData = response;
        console.log("userdata : ", this.userData);
        alert("User Created and inserted successfully");

        this.signUpForm.reset();
        this.router.navigate(['login']);
      })
    }
    else{
      alert("Error While Creating the User");
    }
  }

}
