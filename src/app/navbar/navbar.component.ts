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
  userFullname: string = '';

  constructor(
    private route: Router,
    private http: HttpClient,

    public authServ: AuthserviceService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.authServ.isUserLoggedIn$.subscribe((isLoggedIn) => {
      // this.isLoggedIn = true;
      this.updateMenu(isLoggedIn);
    });
    const isLoggedIn = this.authServ.isUserLoggedIn();
    this.updateMenu(isLoggedIn); // Initial check
  }


  updateMenu(isLoggedIn: boolean) {

    const userProfileString = localStorage.getItem('userProfile');

    if (userProfileString !== null) {
      this.userProfile = JSON.parse(userProfileString);
      this.isLoggedIn = true;
      this.isHostelOwner = this.userProfile.usertype === 'Hostel Owner';

      this.userFullname = this.userProfile.fullname;
      this.cdRef.detectChanges(); // Trigger change detection

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
