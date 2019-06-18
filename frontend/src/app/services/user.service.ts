import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsername() {
    this.http.get('http://localhost:53060/api/User/123')
      .subscribe(resp => {
        console.log(resp);
      });
  }

  addUser(user: User) {
    const dataUser = new User();

    dataUser.apellido = user.apellido;
    dataUser.nombre = user.nombre;
    dataUser.email = user.email;

    this.http.post('http://localhost:53060/api/User/adduser', dataUser)
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
