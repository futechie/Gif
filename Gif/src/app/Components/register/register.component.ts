import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../Services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any  = {};
  constructor( private registerService: RegisterService) {
    this.model = {
      username: '', email: '', password: '', repassword: ''};
  }

  data: any;
  ngOnInit() {
  }

  saveUsers()  {
    this.registerService.saveUsers(this.model).subscribe();
    console.log(this.model);
  }

  // getUsers() {
  //   this.registerService.getUser().subscribe();
  // }
}
