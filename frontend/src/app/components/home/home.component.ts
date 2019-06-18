import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/UserModel';
import { FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formDatos: FormGroup;

  constructor(private userService: UserService, private formData: FormBuilder) {

   }

  ngOnInit() {
    this.formDatos = this.formData.group({
      nombre: [''],
      apellido: [''],
      email: ['']
    });
  }

  onSubmit(formValue: any) {
    const userDatos = new User();

    userDatos.nombre = formValue.nombre;
    userDatos.apellido = formValue.apellido;
    userDatos.email = formValue.email;

    this.userService.addUser(userDatos);
  }

}
