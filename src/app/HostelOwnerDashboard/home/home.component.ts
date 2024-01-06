import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userProfile:any;
  isUserLoggedIn : boolean = false;

  constructor(){

  }

  ngOnInit():void{
    const loggedInUserData = localStorage.getItem('userProfile');
    //console.log("LoggeedInUser: ", loggedInUserData);

    if(loggedInUserData !== null){
      this.userProfile = JSON.parse(loggedInUserData);
      console.log("UserProfileDetails : ", this.userProfile);
      this.isUserLoggedIn = true;

      console.log("UserLoggedIn : ",this.isUserLoggedIn);
    }
    else{
      console.error('User Profile is not found in local stroage');
    }


  }





}
