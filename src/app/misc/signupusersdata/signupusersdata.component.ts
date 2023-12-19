import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SignUpService } from '../../service/sign-up.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-signupusersdata',
  templateUrl: './signupusersdata.component.html',
  styleUrl: './signupusersdata.component.css'
})
export class SignupusersdataComponent {

  users: User[] = [];

  constructor(private http:HttpClient, private signupServ:SignUpService){

  }

  ngOnInit():void{
    this.loadAllusersData();

  }

  loadAllusersData():void{
    this.signupServ.getAllUsers().subscribe((response:any)=>{
      this.users = response;
      console.log("_USERS_DATA :", this.users);
    })
  }



}
