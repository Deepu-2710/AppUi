import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Http, URLSearchParams} from "@angular/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  environ= environment;
  userid = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  loginErrorText: string = "Times";
  constructor(private http:Http) {
    this.hide = true;
    this.loginErrorText = "";
    
   }

  ngOnInit() {
  }
  getLoginIDErrorMessage() {
    return this.userid.hasError('required') ? 'You must enter login ID' : '';
  }
  getPasswordErrorMessage(){
    return this.password.hasError('required') ? 'You must enter password' : '';
  }
  submitClick()
  {
    if (this.userid.valid && this.password.valid)
    {
      this.environ.boolLoginVisible = false;
      let data = new URLSearchParams();
      data.append('username', this.userid.value);
      data.append('password', this.password.value);
      this.http.post('/api', data).subscribe(data =>
        {
          // this.environ.hostAddress
          let response = data.json();

          this.environ.boolLoginVisible = false;
        }
      );
    }
    else{
      this.loginErrorText = "Invalid username or password!";
      
    }
  }
}
