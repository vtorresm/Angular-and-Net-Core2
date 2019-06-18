import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {
    const userData = new User();
    userData.nombre = 'Victor';
    userData.apellido = 'Torres';
    userData.email = 'testing@test.com';

    this.userService.addUser(userData);
   }

  ngOnInit() {
  }

}
