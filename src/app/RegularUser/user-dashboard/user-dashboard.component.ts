import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  userProfile:any;
  isUserLoggedIn:boolean=false;

  constructor(){}

  ngOnInit():void{
    const loggedInUserData = localStorage.getItem('userProfile');

    if(loggedInUserData !== null){
      this.userProfile = JSON.parse(loggedInUserData);
      this.isUserLoggedIn = true;
    }
    else{
      console.error('User Profile is not foound in local storage');
    }
  }



}
