import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private tokenStorageService: TokenStorageService,
    private userService: UserService
  ) {}
  isLoggedIn = false;
  isUser = false;
  isAdmin = false;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.userService.getUserBoard().subscribe(
        (data) => {
          this.isAdmin = true;
        },
        (err) => {}
      );
      this.userService.getAdminBoard().subscribe(
        (data) => {
          this.isUser = true;
        },
        (err) => {}
      );
    }
  }

  logOut(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
