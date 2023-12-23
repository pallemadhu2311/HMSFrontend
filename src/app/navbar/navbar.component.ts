
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {


  userProfile: any;
  isLoggedIn: boolean = false;
  isHostelOwner: boolean = false;

  constructor(
    private route: Router,
    private http: HttpClient,
    private authServ: AuthserviceService
  ) {}

  ngOnInit() {
    this.authServ.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.updateMenu();
    });
    this.updateMenu(); // Initial check

  }


  updateMenu() {
    const userProfileString = localStorage.getItem('userProfile');

    if (userProfileString !== null) {
      this.userProfile = JSON.parse(userProfileString);
      this.isLoggedIn = true;
      this.isHostelOwner = this.userProfile.usertype === 'Hostel Owner';
    } else {
      this.isLoggedIn = false;
      this.isHostelOwner = false;
    }
  }


  onLogout() {
    localStorage.removeItem('userProfile');
    this.authServ.setLoggedIn(false); // Update login status in the service
    this.route.navigate(['login']);

  }
}
