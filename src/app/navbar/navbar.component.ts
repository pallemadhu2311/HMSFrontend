import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
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

  isRegularUser: boolean = false;
  userFullname: string = '';

  constructor(
    private route: Router,
    private http: HttpClient,
    public authServ: AuthserviceService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('NavbarComponent ngOnInit called');
    this.authServ.isUserLoggedIn$.subscribe((isLoggedIn) => {

      console.log('Is user logged in?', isLoggedIn);
      this.isLoggedIn = isLoggedIn;
      this.updateMenu();
    });

    const isLoggedIn = this.authServ.isUserLoggedIn();
    console.log('Is user logged in initially?', isLoggedIn);
    this.isLoggedIn = isLoggedIn;
    this.updateMenu(); // Initial check
  }

  updateMenu() {
    const userProfileString = localStorage.getItem('userProfile');

    if (userProfileString !== null) {
      this.userProfile = JSON.parse(userProfileString);

      this.userFullname = this.userProfile.fullname;

      if (this.userProfile.usertype === 'Hostel Owner') {
        this.isHostelOwner = true;
        console.log("__HostelOwner___");
      } else if (this.userProfile.usertype === 'Regular User') {
        this.isRegularUser = true;
        console.log("__RegularUser___");
      } else {
        console.log("__InvalidUser___");
      }

    }
  }

  onLogout() {
    localStorage.removeItem('userProfile');
    this.authServ.setLoggedIn(false); // Update login status in the service
    this.route.navigate(['login']);
  }
}
